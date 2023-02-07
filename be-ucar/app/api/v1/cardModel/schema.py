from pydantic import BaseModel
from datetime import datetime
from typing import Optional


class CardModalItemBase(BaseModel):
    name: str
    logo: Optional[str]
    description: Optional[str]
    status: Optional[int]
    card_brand_id: int
    
    class Config:
        orm_mode = True


class CardModalItemResponse(CardModalItemBase):
    id: int
    name: str
    logo: Optional[str]
    description: Optional[str] 
    is_delete: bool
    total_card_modal: Optional[str]
    last_update: Optional[datetime]


class CardModalItemRequest(CardModalItemBase):
    name: str
    card_brand_id: int
    avatar: Optional[str]
    description: Optional[str]

