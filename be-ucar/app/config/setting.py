import os
import urllib
from pydantic import BaseSettings
from dotenv import load_dotenv

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), '../../'))
load_dotenv(os.path.join(BASE_DIR, '.env'))

class Settings(BaseSettings):
    ROJECT_NAME = os.getenv('project_name', 'Fast Api Ucar Dev Test')
    API_PREFIX = '/api/v1'
    BACKEND_CORS_ORIGINS = ['*']
    HOST_SERVER = os.getenv('POSTGRES_HOST', 'localhost')
    DB_SERVER_PORT = urllib.parse.quote_plus(str(os.getenv('POSTGRES_PORT', '5432')))
    DB_NAME = os.getenv('POSTGRES_DB', 'dev_test')
    DB_USERNAME = urllib.parse.quote_plus(str(os.getenv('POSTGRES_USER', 'postgres')))
    DB_PASSWORD = urllib.parse.quote_plus(str(os.getenv('POSTGRES_PASSWORD', '111')))
    SSL_MODE =  urllib.parse.quote_plus(str(os.getenv('ssl_mode','prefer')))

    
settings = Settings()