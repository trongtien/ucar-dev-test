from sqlalchemy.orm import Session
from typing import Optional
from app.models.card_model import CardModel
from sqlalchemy import select
from app.api.v1.cardModel.schema import CardModalItemRequest


class CardModelRepository:

    @staticmethod
    async def selectAll(db: Session, skip: int, limit: int, search_name: Optional[str] = None, status: Optional[int] = None, card_brand_id: Optional[int] = None):

        offset = limit * skip
        search = "%{}%".format(search_name.lower())
        
        # global list_data_engine_card_modal

        list_data_engine_card_modal = select(CardModel)
        if hasattr(CardModel, 'name') and search_name is not None and len(search_name) > 0: 
            list_data_engine_card_modal = list_data_engine_card_modal.filter(CardModel.name.lower().like(search))

        if hasattr(CardModel, "card_brand_id") and card_brand_id is not None:
            list_data_engine_card_modal = list_data_engine_card_modal.filter(CardModel.card_brand_id == card_brand_id)
        
        if hasattr(CardModel, 'status') and status is not None:
            list_data_engine_card_modal = list_data_engine_card_modal.filter(CardModel.status == status)

        return db.execute(list_data_engine_card_modal.offset(offset).limit(limit)).scalars().all()


    @staticmethod
    async def countItem(db: Session):
        return db.query(CardModel).count()


    @staticmethod
    async def findCardModelByName(db: Session, name: str):
        return db.query(CardModel).filter(CardModel.name == name).first()


    @staticmethod
    async def insert(db: Session, data: CardModalItemRequest):
        insert_card_model = CardModel(
            name = data.name,
            avatar = data.avatar,
            description = data.description,
            is_delete = False,
            created_by = 'root',
            card_brand_id = data.card_brand_id
        )
        db.add(insert_card_model)
        db.commit()
        db.refresh(insert_card_model)
        return insert_card_model


    @staticmethod
    async def findCardById(db: Session, id: int):
        return db.query(CardModel).get(id)

    @staticmethod
    async def find_first_by_card_brand(db: Session, card_brand_id: int):
        return db.query(CardModel).filter(CardModel.card_brand_id == card_brand_id).first()

    @staticmethod
    async def find_card_modal_by_card_brand(db: Session, card_brand_id: int):
        return db.query(CardModel).filter(CardModel.card_brand_id == card_brand_id)


    @staticmethod
    async def update_is_delete(db: Session, current_card_brand: CardModel):
        current_card_brand.is_delete = True
        current_card_brand.deleted_by = 'root'

        db.commit()
        db.refresh(current_card_brand)
        return current_card_brand

    @staticmethod
    async def update(db: Session, current_card_model: CardModel, card_model_update: CardModalItemRequest):
        current_card_model.name = card_model_update.name
        current_card_model.description = card_model_update.description
        current_card_model.logo = card_model_update.logo
        current_card_model.status = card_model_update.status
        current_card_model.updated_by = 'root'

        db.commit()
        db.refresh(current_card_model)
        return current_card_model
        
