from pydantic import BaseModel
from datetime import datetime
from typing import Optional


class CardBrandItemBase(BaseModel):
    name: str
    logo: Optional[str] = None
    description: Optional[str]= None
    status: int
    
    class Config:
        orm_mode = True


class CardBrandItemResponse(CardBrandItemBase):
    id: int
    name: str
    logo: Optional[str]
    description: Optional[str] 
    is_delete: bool
    total_card_modal:Optional[str]
    last_update: datetime | None


class CardBrandItemRequest(CardBrandItemBase):
    name: str
    logo: Optional[str]
    description: Optional[str]

