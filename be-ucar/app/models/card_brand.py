from sqlalchemy import Column, String, Integer, Boolean
from sqlalchemy.orm import relationship

from app.core.model_base import ModalBase


class CardBrand(ModalBase):
    __tablename__ = "card_brand"

    name = Column(String(255), index=True, nullable=False)
    logo = Column(String(255), nullable=True)
    description = Column(String, nullable=False)
    status = Column(Integer, index=True)
    is_delete = Column(Boolean, index=True)

    # card_models = relationship("CardModel", back_populates="owner_card_brand", cascade="all, delete-orphan")


