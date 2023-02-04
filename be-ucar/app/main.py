import uvicorn
from typing import List
from typing import Union
from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

from app.core.exception_handler import CustomException, exception_handler
from app.config.db_pg import database
from app.config.setting import settings


appRoot = FastAPI()


def get_application() -> FastAPI:
    titleProject = settings.ROJECT_NAME
    prefixProject = settings.API_PREFIX

    application = FastAPI(
        title=titleProject, docs_url="/docs", redoc_url='/re-docs',
        openapi_url=f"{prefixProject}/openapi.json",
        description=''
    )

    application.add_middleware(
        CORSMiddleware,
        allow_origins=[str(origin) for origin in settings.BACKEND_CORS_ORIGINS],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    # application.include_router(router, prefix=prefixProject)
    application.add_exception_handler(CustomException, exception_handler.http_exception_handler)

app = get_application()

@appRoot.on_event("startup")
async def startup():
    await database.connect()

@appRoot.on_event("shutdown")
async def shutdown():
    await database.disconnect()

if __name__ == '__main__':
    uvicorn.run(app, host="0.0.0.0", port=8000)

# import databases
# import sqlalchemy
# from fastapi import FastAPI, status
# from fastapi.middleware.cors import CORSMiddleware
# from pydantic import BaseModel
# import os
# import urllib


# notes = sqlalchemy.Table(
#     "notes",
#     metadata,
#     sqlalchemy.Column("id", sqlalchemy.Integer, primary_key=True),
#     sqlalchemy.Column("text", sqlalchemy.String),
#     sqlalchemy.Column("completed", sqlalchemy.Boolean),
# )


# engine = sqlalchemy.create_engine(
#     DATABASE_URL, pool_size=3, max_overflow=0
# )
# metadata.create_all(engine)

# class NoteIn(BaseModel):
#     text: str
#     completed: bool

# class Note(BaseModel):
#     id: int
#     text: str
#     completed: bool

# app = FastAPI(title = "REST API using FastAPI PostgreSQL Async EndPoints")
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# @app.on_event("startup")
# async def startup():
#     await database.connect()

# @app.on_event("shutdown")
# async def shutdown():
#     await database.disconnect()

# @app.get("/notes/", response_model=List[Note], status_code = status.HTTP_200_OK)
# async def read_notes(skip: int = 0, take: int = 20):
#     query = notes.select().offset(skip).limit(take)
#     return await database.fetch_all(query)

# @app.get("/notes/{note_id}/", response_model=Note, status_code = status.HTTP_200_OK)
# async def read_notes(note_id: int):
#     query = notes.select().where(notes.c.id == note_id)
#     return await database.fetch_one(query)

# @app.post("/notes/", response_model=Note, status_code = status.HTTP_201_CREATED)
# async def create_note(note: NoteIn):
#     query = notes.insert().values(text=note.text, completed=note.completed)
#     last_record_id = await database.execute(query)
#     return {**note.dict(), "id": last_record_id}

# @app.put("/notes/{note_id}/", response_model=Note, status_code = status.HTTP_200_OK)
# async def update_note(note_id: int, payload: NoteIn):
#     query = notes.update().where(notes.c.id == note_id).values(text=payload.text, completed=payload.completed)
#     await database.execute(query)
#     return {**payload.dict(), "id": note_id}

# @app.delete("/notes/{note_id}/", status_code = status.HTTP_200_OK)
# async def delete_note(note_id: int):
#     query = notes.delete().where(notes.c.id == note_id)
#     await database.execute(query)
#     return {"message": "Note with id: {} deleted successfully!".format(note_id)}