from sqlalchemy import Column, String, Integer, ForeignKey, Boolean
from sqlalchemy.orm import relationship

from app.core.model_base import ModalBase


class CardModel(ModalBase):
    __tablename__ = "card_model"

    name = Column(String(255), index=True, nullable=False)
    avatar = Column(String(255), default=None, nullable=True, index=True)
    description = Column(String, default=None, nullable=True)
    status = Column(Integer, nullable=True, index=True)
    is_delete = Column(Boolean, nullable = False, index=True)
    # card_brand_id = Column(Integer, ForeignKey('CardBrand.id'), nullable=False, index=True)
    card_brand_id = Column(Integer, nullable=False, index=True)

    # owner_card_brand = relationship("CardBrand", back_populates="card_model")

