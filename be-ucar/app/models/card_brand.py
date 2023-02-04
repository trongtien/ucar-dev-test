from sqlalchemy import Column, String, Integer, Boolean
from sqlalchemy.orm import relationship

from app.core.model_base import ModalBase



class CardBrand(ModalBase):
    __tablename__ = "card_brand"

    name = Column(String(255), index=True)
    logo = Column(String(255))
    description = Column(String)
    status = Column(Integer, index=True)
    is_delete = Column(Boolean, index=True)

    # card_model = relationship("CardModel", back_populates="owner")


