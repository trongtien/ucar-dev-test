from sqlalchemy.orm import Session
from app.models.card_brand import CardBrand
from sqlalchemy import select
from app.api.v1.cardBrand.schema import CardBrandItemRequest
from typing import Optional

class CardBrandRepository:

    @staticmethod
    async def selectAll(db: Session, skip: int, limit: int, search_name: Optional[str] = None, status: Optional[int] = None):
        offset = limit * skip
        search = "%{}%".format(search_name.lower())
        
        list_data_engine_card_brand = select(CardBrand)

        if hasattr(CardBrand, 'status') and status is not None: 
            list_data_engine_card_brand = list_data_engine_card_brand.filter(CardBrand.status == status)

        if hasattr(CardBrand, 'name') and search_name is not None and len(search_name) > 0: 
            list_data_engine_card_brand = list_data_engine_card_brand.filter(CardBrand.name.lower().like(search))

        if hasattr(CardBrand, 'status') and status is not None:
            list_data_engine_card_brand = list_data_engine_card_brand.filter(CardBrand.status == status)

        return db.execute(list_data_engine_card_brand.offset(offset).limit(limit)).scalars().all()

    @staticmethod
    async def countItem(db: Session):
        return db.query(CardBrand).count()


    @staticmethod
    async def findCardByName(db: Session, name: str):
        return db.query(CardBrand).filter(CardBrand.name == name).first()

    @staticmethod
    async def insert(db: Session, data: CardBrandItemRequest):
        insert_card_brand = CardBrand(
            name = data.name,
            logo = data.logo,
            description = data.description,
            status = data.status,
            is_delete = False,
            created_by = 'root',
            total_card_model = 0
        )
        db.add(insert_card_brand)
        db.commit()
        db.refresh(insert_card_brand)
        return insert_card_brand


    @staticmethod
    async def findCardById(db: Session, id: int) -> CardBrand:
        print('findCardById', id)
        return db.query(CardBrand).get(id)

    @staticmethod
    async def update_total_card_modal(db: Session, current_card_brand: CardBrand, total_card_modal: int):
        current_card_brand.total_card_model = total_card_modal
        db.commit()
        db.refresh(current_card_brand)
        return current_card_brand

    @staticmethod
    async def update_is_delete(db: Session, current_card_brand: CardBrand):
        current_card_brand.is_delete = True
        current_card_brand.deleted_by = 'root'

        db.commit()
        db.refresh(current_card_brand)
        return current_card_brand

    @staticmethod
    async def update(db: Session, current_card_brand: CardBrand, card_brand_update: CardBrandItemRequest):
        current_card_brand.name = card_brand_update.name
        current_card_brand.description = card_brand_update.description
        current_card_brand.logo = card_brand_update.logo
        current_card_brand.status = card_brand_update.status
        current_card_brand.updated_by = 'root'

        db.commit()
        db.refresh(current_card_brand)
        return current_card_brand
        
