from sqlalchemy import Column, String, Integer, ForeignKey, Boolean
from sqlalchemy.orm import relationship

from app.models.model_base import ModalBase


class CardModel(ModalBase):
    __tablename__ = "card_model"

    name = Column(String(255), index=True, nullable=False)
    avatar = Column(String(255), default=None, nullable=True, index=True)
    description = Column(String, default=None, nullable=True)
    status = Column(Integer, nullable=True, index=True)
    is_delete = Column(Boolean, nullable = False, index=True)
    card_brand_id = Column(Integer, ForeignKey('card_brand.id'))
    
    card_brand_owner = relationship("CardBrand", back_populates="item_card_models")

