import databases
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from app.config.setting import settings
from typing import Generator


DATABASE_URL = 'postgresql://{}:{}@{}:{}/{}?sslmode={}'.format(
    settings.DB_USERNAME, 
    settings.DB_PASSWORD,
    settings.HOST_SERVER,
    settings.DB_SERVER_PORT,
    settings.DB_NAME,
    settings.SSL_MODE
)

engine = create_engine(DATABASE_URL, pool_pre_ping=True)
SessionLocalPG = sessionmaker(autocommit=False, autoflush=False, bind=engine)

BasePG = declarative_base()

database = databases.Database(DATABASE_URL)

def get_db_pg() -> Generator:
    db = SessionLocalPG()

    try:
        yield db
    finally:
        db.close()