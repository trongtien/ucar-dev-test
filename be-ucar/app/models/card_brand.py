from sqlalchemy import Column, String, Integer, Boolean
from sqlalchemy.orm import relationship

from app.core.model_base import ModalBase
from app.models.card_model import CardModel


class CardBrand(ModalBase):
    __tablename__ = "card_brand"

    name = Column(String(255), index=True, nullable=False)
    logo = Column(String(255))
    description = Column(String)
    status = Column(Integer, index=True)
    is_delete = Column(Boolean, index=True)

    card_models = relationship("CardModel", secondary="card_brand_model", back_populates="card_brand")


