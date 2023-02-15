import logging
from app.config.db_pg import get_db_pg
from sqlalchemy.orm import Session
from fastapi import APIRouter, status, HTTPException, Depends
from typing import Optional
import json

from app.api.base.schema_base import DataResponseBase
from app.api.v1.cardModel.schema import CardModalItemRequest
from app.services.card_model_service import CardModelService


router = APIRouter()
logger = logging.getLogger()

@router.get("",  status_code = status.HTTP_200_OK, name='Get Lít card model')
async def getAll(page: int = 1, limit: int = 10, status: Optional[str] = -1, search_name: Optional[str] = '', card_brand_id: Optional[int] = None, db: Session = Depends(get_db_pg)):
    try:
        card_brand = await CardModelService().getAll(db,limit=limit, skip = page, search_name=search_name, status=status, card_brand_id=card_brand_id)
        if card_brand.get('code') is not True:
            return DataResponseBase().err_response(code=500, message='Service error')

        return DataResponseBase().success_response(data=card_brand.get('data'))
    except Exception as e:
        return DataResponseBase(status_code=400, detail=logger.error(e))


@router.post("",  status_code = status.HTTP_200_OK, name="Create card model")
async def create(data: CardModalItemRequest, db: Session = Depends(get_db_pg)):
    try:
        create_item = await CardModelService().createItem(db=db, card_model_create=data)
        if create_item.get('code') is not True:
            return DataResponseBase().err_response(code=create_item.get('status'), message=create_item.get('msg'))
           
        return DataResponseBase().success_response(data=create_item.get('data'))
    except Exception as e:
        return DataResponseBase().err_response(code=400, message=str(logger.error(e)))


@router.get("/{card_model_id}", status_code = status.HTTP_200_OK, name="Fet detail card model")
async def detail(card_model_id: int, db: Session = Depends(get_db_pg)):
    try:
        exist_service = await CardModelService().getDetail(db=db, id=card_model_id)
        if exist_service.get('code') is not True:
            return DataResponseBase().err_response(code=400, message=exist_service.get('msg'))

        return DataResponseBase().success_response(data=exist_service.get('data'))
    except Exception as e:
        return DataResponseBase().err_response(code=400, message=str(e))


@router.put("/{card_model_id}", status_code = status.HTTP_200_OK, name='Update card model')
async def update(card_model_id: int, card_model_data: CardModalItemRequest, db: Session = Depends(get_db_pg)):
    try:
        exist_service = await CardModelService().updateDetail(db=db, id=card_model_id, card_model_update=card_model_data)

        if exist_service.get('code') is not True:
            return DataResponseBase().err_response(code=400, message=exist_service.get('msg'))

        return DataResponseBase().success_response(data=exist_service.get('data'))
    except Exception as e:
        return DataResponseBase().err_response(code=500, message=str(e))


@router.delete("/{card_model_id}", status_code = status.HTTP_200_OK, name='Deleted card model')
async def delete(card_model_id: int, db: Session = Depends(get_db_pg)):
    try:
        exist_service = await CardModelService().delete(db=db, id=card_model_id)

        if exist_service.get('code') is not True:
            return DataResponseBase().err_response(code=exist_service.get('status'), message=exist_service.get('msg'))

        return DataResponseBase().success_response(data=exist_service.get('data'))
        
    except Exception as e:
        raise DataResponseBase(http_code=400, code='400', message=str(e))