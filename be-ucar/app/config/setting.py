import os
import urllib
from pydantic import BaseSettings, Field
from dotenv import load_dotenv

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), '../../'))
load_dotenv(os.path.join(BASE_DIR, '.env'))

class Settings(BaseSettings):
    ROJECT_NAME = os.getenv('project_name', 'Fast Api Ucar Dev Test')
    API_PREFIX = '/api/v1'
    BACKEND_CORS_ORIGINS = ['*']
    HOST_SERVER: str = Field('0.0.0.0', env='HOST_SERVER')
    DB_SERVER_PORT: str = Field('5432', env='DB_SERVER_PORT')
    DB_NAME: str = Field('dev_test', env='DB_NAME')
    DB_USERNAME: str = Field('postgres', env='DB_USERNAME')
    DB_PASSWORD: str = Field('111', env='DB_PASSWORD')
    SSL_MODE: str = Field('prefer', env='SSL_MODE')
    DATABASE_URL: str = Field('prefer', env='DATABASE_URL')

    
settings = Settings()