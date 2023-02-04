from fastapi import APIRouter

from app.api.v1.cardBrand import card_brand

router = APIRouter()


router.include_router(card_brand.router, tags=["card-brand"], prefix="/card-brand")