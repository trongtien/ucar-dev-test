from datetime import datetime
from sqlalchemy import Column, Integer, DateTime, String

@as_declarative()
class Base:
    __abstract__ = True
    __name__: str

    # Generate __tablename__ automatically
    @declared_attr
    def __tablename__(cls) -> str:
        return cls.__name__.lower()


class BareBaseModel(Base):
    __abstract__ = True

    id = Column(Integer, primary_key=True, autoincrement=True)
    created_at = Column(DateTime, default=datetime.now)
    updated_at = Column(DateTime, default=datetime.now, onupdate=datetime.now)
    deleted_at = Column(DateTime, default=datetime.now, ondelete=datetime.now)
    created_by = Column(String, default=None)
    updated_by = Column(String, default=None)
    deleted_by = Column(String, default=None)

