from pydantic import BaseModel
from datetime import datetime
from typing import Optional


class CardBrandItemBase(BaseModel):
    name: str
    logo: str | None = None
    description: str | None = None
    status: int
    
    class Config:
        orm_mode = True


class CardBrandItemResponse(CardBrandItemBase):
    id: int
    name: str
    logo: str | None
    description: str | None 
    is_delete: bool
    total_card_modal:str | None
    last_update: datetime | None


class CardBrandItemRequest(CardBrandItemBase):
    name: str
    logo: str | None = None
    description: str | None = None

