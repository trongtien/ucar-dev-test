from sqlalchemy.orm import Session
from typing import Optional
from app.models.card_model import CardModel

from app.api.v1.cardModel.schema import CardModalItemRequest


class CardModelRepository:

    @staticmethod
    async def selectAll(db: Session, skip: int, limit: int, search_name: str, status: int, card_brand_id: Optional[int] = None):
        offset = limit * skip
        isAllStatus = int(status) != -1
        search = "%{}%".format(search_name)

        if(isAllStatus):
            return db.query(CardModel).filter(CardModel.status == status).offset(offset).limit(limit).all()
        elif(len(search_name) or search_name is not None):
            return db.query(CardModel).filter(CardModel.name.like(search)).offset(offset).limit(limit).all()
        else:
            return db.query(CardModel).offset(offset).limit(limit).all()


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
    async def update(db: Session, current_card_model: CardModel, card_model_update: CardModalItemRequest):
        current_card_model.name = card_model_update.name
        current_card_model.description = card_model_update.description
        current_card_model.logo = card_model_update.logo
        current_card_model.status = card_model_update.status
        current_card_model.updated_by = 'root'

        db.commit()
        db.refresh(current_card_model)
        return current_card_model
        
