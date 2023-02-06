from fastapi import APIRouter

from app.api.v1.cardBrand import card_brand
from app.api.v1.cardModel import card_model
from app.api.v1.uploadFile import upload_file

router = APIRouter()


router.include_router(card_brand.router, tags=["card-brand"], prefix="/card-brand")
router.include_router(card_model.router, tags=["card-model"], prefix="/card-model")
router.include_router(upload_file.router, tags=["upload-file"], prefix="/upload-file")