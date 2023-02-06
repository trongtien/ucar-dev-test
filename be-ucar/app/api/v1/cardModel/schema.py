from pydantic import BaseModel
from datetime import datetime
from typing import Optional


class CardModalItemBase(BaseModel):
    name: str
    logo: str | None = None
    description: str | None = None
    status: int | None = None
    card_brand_id: int
    
    class Config:
        orm_mode = True


class CardModalItemResponse(CardModalItemBase):
    id: int
    name: str
    logo: str | None
    description: str | None 
    is_delete: bool
    total_card_modal:str | None
    last_update: datetime | None


class CardModalItemRequest(CardModalItemBase):
    name: str
    card_brand_id: int
    avatar: str | None = None
    description: str | None = None

