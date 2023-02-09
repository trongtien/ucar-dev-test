import os
from pathlib import Path

BASEDIR = Path(__file__).resolve(strict=True).parent.parent.parent
APPS_DIR = BASEDIR/"app"

FOLDER_PUBLIC = "media"
PATH_FILE = str(APPS_DIR/FOLDER_PUBLIC)