from sqlalchemy import Column, String, Integer, ForeignKey
from sqlalchemy.orm import relationship

from app.core.model_base import ModalBase
from app.models.card_brand import CardBrand

class CardModel(ModalBase):
    __tablename__ = "card_model"

    name = Column(String(255), index=True, nullable=False)
    avatar = Column(String(255), default=None, nullable=True, index=True)
    description = Column(String, default=None, nullable=True)
    card_brand_id = Column(Integer, ForeignKey("card_brand.id"), nullable=False, index=True)

    card_brand = relationship("CardBrand",secondary="card_brand_model",  back_populates="card_model")

