from fastapi import APIRouter

from app.api.v1.cardBrand import controller as controller_card_brand
from app.api.v1.cardModel import comtroler as controller_card_model
from app.api.v1.uploadFile import controller as controller_upload_file

router = APIRouter()


router.include_router(controller_card_brand.router, tags=["card-brand"], prefix="/card-brand")
router.include_router(controller_card_model.router, tags=["card-model"], prefix="/card-model")
router.include_router(controller_upload_file.router, tags=["upload-file"], prefix="/upload-file")