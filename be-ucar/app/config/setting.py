import os
import urllib
from pydantic import BaseSettings
from dotenv import load_dotenv

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), '../../'))
load_dotenv(os.path.join(BASE_DIR, '.env'))

class Settings(BaseSettings):
    ROJECT_NAME = os.getenv('project_name', 'Fast Api Ucar Dev Test')
    API_PREFIX = ''
    BACKEND_CORS_ORIGINS = ['*']
    HOST_SERVER = os.getenv('host_server', 'localhost')
    DB_SERVER_PORT = urllib.parse.quote_plus(str(os.getenv('db_server_port', '5432')))
    DB_NAME = os.getenv('database_name', 'db_ucar_dev_test')
    DB_USERNAME = urllib.parse.quote_plus(str(os.getenv('db_username', 'postgres')))
    DB_PASSWORD = urllib.parse.quote_plus(str(os.getenv('db_password', '111')))
    SSL_MODE =  urllib.parse.quote_plus(str(os.getenv('ssl_mode','prefer')))

    
settings = Settings()