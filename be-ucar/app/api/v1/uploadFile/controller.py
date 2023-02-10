import logging
import os
import aiofiles
import base64
import uuid
from app.config.constants import PATH_FILE, FOLDER_PUBLIC
from fastapi import APIRouter, status, UploadFile

from app.api.base.schema_base import DataResponseBase


router = APIRouter()
logger = logging.getLogger()


@router.post("",  status_code = status.HTTP_200_OK)
async def create_upload_file(file: UploadFile):
    try:
        _, ext = os.path.splitext(file.filename)
        file_name_upload = f'${uuid.uuid4()}_${file.filename}'

        if not os.path.exists(PATH_FILE):
            os.makedirs(PATH_FILE)
        content = await file.read()
        if file.content_type not in ['image/jpeg', 'image/png', 'image/svg']:
            return DataResponseBase(status_code=406, detail="Only .jpeg or .png  files allowed")

        format_file_name = file_name_upload.replace(' ', '_').lower().replace('-', '_')

        async with aiofiles.open(os.path.join(PATH_FILE, format_file_name), mode='wb') as f:
            await f.write(content)

        return DataResponseBase().success_response(data=os.path.join(FOLDER_PUBLIC, format_file_name))
    except Exception as e:
        return DataResponseBase(status_code=400, detail=logger.error(e))


@router.get("/{file_name}",  status_code = status.HTTP_200_OK)
async def get_file_base_64(file_name: str):
    try:
        file_save_decode = await getFileBase64(file_name)
        return DataResponseBase().success_response(data=file_save_decode)
    except Exception as e:
        return DataResponseBase(status_code=400, detail=logger.error(e))

async def getFileBase64(file_name: str):
    link_path_to_file = os.path.join(PATH_FILE, file_name)
    with open(link_path_to_file, "rb") as img_file:
        b64_string = base64.b64encode(img_file.read())
    return b64_string