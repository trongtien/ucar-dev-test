from typing import Optional, TypeVar, Generic
from sqlalchemy.ext.declarative import as_declarative, declared_attr
from pydantic.generics import GenericModel
from pydantic import BaseModel

T = TypeVar("T")


class ReponseServiceSchemaBase(BaseModel):
    code: bool = True
    msg: str = ''
    status: int = 200
    data: T

class ResponseSchemaBase(BaseModel):
    __abstract__ = True

    code: str = ''
    message: str = ''

    def custom_response(self, code: str, message: str):
        self.code = code
        self.message = message
        return self

    def success_response(self):
        self.code = '1'
        self.message = 'Thành công'
        return self


class DataResponseBase(ResponseSchemaBase, GenericModel, Generic[T]):
    data: Optional[T] = None

    class Config:
        arbitrary_types_allowed = True

    def custom_response(self, code: str, message: str, data: T):
        self.code = code
        self.message = message
        self.data = data
        return self

    def success_response(self, data: T):
        self.code = '1'
        self.message = 'Thành công'
        self.data = data
        return self

    def success_response_list(self, items: T, limit: int, page: int, total_item: int ):
        self.code = '1'
        self.message = 'Thành công'
        self.data = {
            limit: limit,
            page: page,
            total_item: total_item,
            items: items
        }

        return self



