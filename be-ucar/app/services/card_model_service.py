from sqlalchemy.orm import Session
from typing import Optional

from app.repository.card_model_repository import CardModelRepository
from app.repository.card_brand_repository import CardBrandRepository
from app.api.v1.cardModel.schema import CardModalItemRequest
from app.services.service_base import ServiceBase


class CardModelService(ServiceBase, CardModelRepository):

    def __init__(self):
        super().__init__()

    async def getAll(seft, db: Session, skip: int, limit: int, search_name = str, status = int, card_brand_id: Optional[int] = None):
        status_query = None if int(status) < 0 else status
        
        queryCardModels = await seft.selectAll(
            db, 
            skip=seft.defaul_skip_query(skip),
            limit=limit,
            search_name=search_name, 
            status=status_query, 
            card_brand_id=card_brand_id
        )
        countCardModel = await seft.countItem(db)
        return seft.response_list(data=queryCardModels, limit=limit, page=skip, total_item=countCardModel)


    async def createItem(seft,db: Session, card_model_create: CardModalItemRequest):

        exist_card_brand = await CardBrandRepository().findCardById(db=db, id=card_model_create.card_brand_id)
        if exist_card_brand is None:
            return seft.response(status=400, data=None, code=False, msg='Card brand id exists')

        
        exist_name = await seft.findCardModelByName(db=db, name=card_model_create.name)
        if exist_name is not None:
            return seft.response(status=400, data=None, code=False, msg='Name card model exists')

        register_card_brand = await seft.insert(db=db, data=card_model_create)
        return seft.response(data=register_card_brand)

    async def getDetail(seft, db: Session, id: int):
        exist_card_brand = await seft.findCardById(db=db, id=id)
        if exist_card_brand is None:
            return seft.response(status=400, data=None, code=False, msg='Id card brand already exists')
        else:
            return seft.response(data=exist_card_brand)


    async def updateDetail(seft, db: Session, id: int, card_model_update: CardModalItemRequest):
        exist_card_model = await seft.findCardById(db=db, id=id)

        if exist_card_model is None:
            return seft.response(status=400, data=None, code=False, msg='Id card brand already exists')
        
        elif exist_card_model.card_brand_id != card_model_update.card_brand_id:
            exist_card_brand = await CardBrandRepository().findCardById(db=db, id=card_model_update.card_brand_id)
           
            if exist_card_brand is None:
                return seft.response(status=400, data=None, code=False, msg='Card brand id exists')
       
        elif exist_card_model.name != card_model_update.name:
            exist_name = await seft.findCardModelByName(db=db, name=card_model_update.name)
            
            if exist_name is not None:
                return seft.response(status=400, data=None, code=False, msg='Name card model exists')

        updated_card_brand = await seft.update(db=db, current_card_model=exist_card_model, card_model_update=card_model_update)
        return  seft.response(data=updated_card_brand)
        
           
