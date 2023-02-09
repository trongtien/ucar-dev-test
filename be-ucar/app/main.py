from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles


from app.api.v1.api_route import router
from app.api.base.exception_handler import CustomException, exception_handler
from app.config.db_pg import database, engine, BasePG
from app.config.setting import settings
from app.config.constants import PATH_FILE
import os

BasePG.metadata.create_all(bind=engine)

default_app_setting = settings

app = FastAPI()

app = FastAPI(
        title=default_app_setting.ROJECT_NAME, docs_url="/docs", redoc_url='/re-docs',
        openapi_url=f"{default_app_setting.API_PREFIX}/openapi.json",
        description=''
)

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router, prefix=default_app_setting.API_PREFIX)
app.add_exception_handler(CustomException, exception_handler.http_exception_handler)

if PATH_FILE:
    app.mount("/media", StaticFiles(directory=PATH_FILE), name="media")

@app.on_event("startup")
async def startup():
    await database.connect()

@app.on_event("shutdown")
async def shutdown():
    await database.disconnect()

# if __name__ == "__main__":
#     uvicorn.run("main:app", host="127.0.0.1", port=8000, log_level="info")
