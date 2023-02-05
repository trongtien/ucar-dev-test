from sqlalchemy.orm import Session
from app.models.card_brand import CardBrand

from app.api.v1.cardBrand.schema import CardBrandItemRequest


class CardBrandRepository:

    @staticmethod
    async def selectAll(db: Session, skip: int, limit: int, search_name: str, status: int):
        offset = limit * skip
        isAllStatus = int(status) != -1
        search = "%{}%".format(search_name)
        print ('isAllStatus', isAllStatus)
        if(isAllStatus):
            return db.query(CardBrand).filter(CardBrand.status == status).offset(offset).limit(limit).all()
        elif(len(search_name) or search_name is not None):
            return db.query(CardBrand).filter(CardBrand.name.like(search)).offset(offset).limit(limit).all()
        else:
            return db.query(CardBrand).offset(offset).limit(limit).all()


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
            created_by = 'root'
        )
        db.add(insert_card_brand)
        db.commit()
        db.refresh(insert_card_brand)
        return insert_card_brand


    @staticmethod
    async def findCardById(db: Session, id: int):
        print('')
        return db.query(CardBrand).get(id)


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
        
