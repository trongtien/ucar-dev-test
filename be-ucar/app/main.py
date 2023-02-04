import uvicorn
from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

from app.api.v1.api_route import router
from app.core.exception_handler import CustomException, exception_handler
from app.config.db_pg import database
from app.config.setting import settings

default_app_setting = settings

app = FastAPI()

app = FastAPI(
        title=default_app_setting.ROJECT_NAME, docs_url="/docs", redoc_url='/re-docs',
        openapi_url=f"{default_app_setting.API_PREFIX}/openapi.json",
        description=''
)
app.add_middleware(
    CORSMiddleware,
     allow_origins=[str(origin) for origin in default_app_setting.BACKEND_CORS_ORIGINS],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(router, prefix=default_app_setting.API_PREFIX)
app.add_exception_handler(CustomException, exception_handler.http_exception_handler)


@app.on_event("startup")
async def startup():
    await database.connect()

@app.on_event("shutdown")
async def shutdown():
    await database.disconnect()

if __name__ == '__main__':
    uvicorn.run(app, host="0.0.0.0", port=8000)
