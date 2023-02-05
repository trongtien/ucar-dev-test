import logging
import os
import aiofiles
from fastapi import APIRouter, status, File, UploadFile, HTTPException

from app.core.schema_base import DataResponseBase


router = APIRouter()
logger = logging.getLogger()

BASEDIR = os.path.dirname(__file__)

@router.post("",  status_code = status.HTTP_200_OK)
async def create_upload_file(file: UploadFile):
    try:
        _, ext = os.path.splitext(file.filename)
        img_dir = os.path.join(BASEDIR, '/home/kelvin/Desktop/ucar-dev-test/be-ucar/app/public/')
        if not os.path.exists(img_dir):
            os.makedirs(img_dir)
        content = await file.read()
        if file.content_type not in ['image/jpeg', 'image/png']:
            return DataResponseBase(status_code=406, detail="Only .jpeg or .png  files allowed")
        
        format_file_name = file.filename.replace(' ', '_').lower().replace('-', '_')
        print('format_file_name=======================================', format_file_name)
        async with aiofiles.open(os.path.join(img_dir, format_file_name), mode='wb') as f:
            await f.write(content)

        return DataResponseBase().success_response(data=None)
    except Exception as e:
        return DataResponseBase(status_code=400, detail=logger.error(e))