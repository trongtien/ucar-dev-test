from sqlalchemy.orm import Session
import logging

from app.repository.card_brand_repository import CardBrandRepository
from app.repository.card_model_repository import CardModelRepository
from app.api.v1.cardBrand.schema import CardBrandItemRequest
from app.services.service_base import ServiceBase

logger = logging.getLogger()
class CardBrandService(ServiceBase, CardBrandRepository):

    def __init__(self):
        super().__init__()

    async def getAll(seft, db: Session, skip: int, limit: int, search_name = str, status = int):
        status_query = None if int(status) < 0 else status

        queryCardBrands = await seft.selectAll(db, skip=seft.defaul_skip_query(skip),limit=limit, search_name=search_name, status=status_query)
        countCardBrand = await seft.countItem(db)
        return seft.response_list(data=queryCardBrands, limit=limit, page=skip, total_item=countCardBrand)


    async def createItem(seft,db: Session, card_brand_create: CardBrandItemRequest):
        exist_name = await seft.findCardByName(db=db, name=card_brand_create.name)

        if exist_name == None:
            try:
                register_card_brand = await seft.insert(db=db, data=card_brand_create)
                return seft.response(data=register_card_brand)
            except Exception as e:
                return seft.response(status=500, data=None, code=False, msg=str(e))
        else:
            return seft.response(status=400, data=None, code=False, msg='Name exists')


    async def getDetail(seft, db: Session, id: int):
        exist_card_brand = await seft.findCardById(db=db, id=id)
        if exist_card_brand == None:
            return seft.response(status=400, data=None, code=False, msg='Id card brand already exists')
        else:
            return seft.response(data=exist_card_brand)


    async def updateDetail(seft, db: Session, id: int, card_brand_update: CardBrandItemRequest):
        exist_card_brand = await seft.findCardById(db=db, id=id)
      
        if exist_card_brand == None:
            return seft.response(status=400, data=None, code=False, msg='Id card brand already exists')
        else:
            try:
                print('=================================')
                print('exist_card_brand', exist_card_brand)
                print('card_brand_update', card_brand_update)
                print('=================================')
                updated_card_brand = await seft.update(db=db, current_card_brand=exist_card_brand, card_brand_update=card_brand_update)
                return  seft.response(data=updated_card_brand)
            except Exception as e:
                return seft.response(status=500, data=None, code=False, msg=logger.error(e))
        
    
    async def delete(seft, db: Session,  id: int):
        exist_card_brand = await seft.findCardById(db=db, id=id)
        if exist_card_brand is None:
            return seft.response(status=400, data=None, code=False, msg='Id card brand already exists')
        

        exist_use_card_modal = await CardModelRepository().find_first_by_card_brand(db=db, card_brand_id=id)
        if exist_use_card_modal is not None:
            return seft.response(status=400, data=None, code=False, msg='Id card brand use in card model')
        
     
        updated_card_brand = await seft.update_is_delete(db=db, current_card_brand=exist_card_brand)
        return  seft.response(data=updated_card_brand)