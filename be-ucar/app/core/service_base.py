from typing import TypeVar
from typing import Optional
from fastapi import status

from app.repository.card_brand_repository import CardBrandRepository
from app.core.schema_base import ReponseServiceSchemaBase

T = TypeVar("T")

class ServiceBase():

    @staticmethod
    def response_list(data: T, limit: int, page: int, total_item: int, code: Optional[bool] = True, msg: Optional[str] = None, status: Optional[str] = status.HTTP_200_OK) -> ReponseServiceSchemaBase:
        return {
            'code': code,
            'msg': msg,
            'status': status,
            'data': {
                'limit': limit,
                'page': page,
                'total_item': total_item,
                'items': data
            }
        }

    @staticmethod
    def response(data: T, code: Optional[bool] = True, msg: Optional[str] = None, status: Optional[str] = status.HTTP_200_OK) -> ReponseServiceSchemaBase:
        return {
            'code': code,
            'msg': msg,
            'status': status,
            'data': data
        }

    @staticmethod
    def defaul_skip_query(skip: int) -> int:
        return 1 if skip <= 0 else (skip - 1)