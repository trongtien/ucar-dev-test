import logging
from app.config.db_pg import get_db_pg
from sqlalchemy.orm import Session
from fastapi import APIRouter, status, HTTPException, Depends
from typing import Optional

from app.api.base.schema_base import DataResponseBase
from app.api.v1.cardBrand.schema import CardBrandItemRequest
from app.services.card_brand_service import CardBrandService


router = APIRouter()
logger = logging.getLogger()

@router.get("",  status_code = status.HTTP_200_OK, name='Get list card brand')
async def getAll(page: int = 1, limit: int = 10, status: Optional[str] = -1, search_name: Optional[str] = None, db: Session = Depends(get_db_pg)):
    try:
        print('search_name', search_name)
        card_brand = await CardBrandService().getAll(db,limit=limit, skip = page, search_name=search_name, status=status)
        if card_brand.get('code') is not True:
            return DataResponseBase().err_response(code=500, message='Service error')
        
        return DataResponseBase().success_response(data=card_brand.get('data'))
    except Exception as e:
        return DataResponseBase(status_code=400, detail=logger.error(e))


@router.post("",  status_code = status.HTTP_200_OK, name='Create card brand')
async def create(data: CardBrandItemRequest, db: Session = Depends(get_db_pg)):
    try:
        create_item = await CardBrandService().createItem(db=db, card_brand_create=data)

        if create_item.get('code') is not True:
            return DataResponseBase().err_response(code=create_item.get('status'), message=create_item.get('msg'))
        
        return DataResponseBase().success_response(data=create_item.get('data'))
    except Exception as e:
        return DataResponseBase(status_code=400, detail=logger.error(e))


@router.get("/{card_brand_id}", status_code = status.HTTP_200_OK, name='Get detail card brand')
async def detail(card_brand_id: int, db: Session = Depends(get_db_pg)):
    try:
        exist_service = await CardBrandService().getDetail(db=db, id=card_brand_id)
        if exist_service.get('code') is not True:
            return DataResponseBase().err_response(code=exist_service.get('status'), message=exist_service.get('msg'))
        
        return DataResponseBase().success_response(data=exist_service.get('data'))
        
    except Exception as e:
        raise DataResponseBase(http_code=400, code='400', message=str(e))



@router.put("/{card_brand_id}", status_code = status.HTTP_200_OK, name='UPdate card model')
async def update(card_brand_id: int, card_brand_data: CardBrandItemRequest, db: Session = Depends(get_db_pg)):
    try:
        print("===card_brand_data====", card_brand_data)
        exist_service = await CardBrandService().updateDetail(db=db, id=card_brand_id,card_brand_update=card_brand_data)

        if exist_service.get('code') is not True:
            return DataResponseBase().err_response(code=exist_service.get('status'), message=exist_service.get('msg'))
        
        return DataResponseBase().success_response(data=exist_service.get('data'))
        
    except Exception as e:
        raise DataResponseBase(http_code=400, code='400', message=str(e))


@router.delete("/{card_brand_id}", status_code = status.HTTP_200_OK, name='Delete card model')
async def delete(card_brand_id: int, db: Session = Depends(get_db_pg)):
    try:
        exist_service = await CardBrandService().delete(db=db, id=card_brand_id)

        if exist_service.get('code') is not True:
            return DataResponseBase().err_response(code=exist_service.get('status'), message=exist_service.get('msg'))

        return DataResponseBase().success_response(data=exist_service.get('data'))
        
    except Exception as e:
        raise DataResponseBase(http_code=400, code='400', message=str(e))
