# uvicorn app.main:app --reload

#window
# python3 -m uvicorn app.main:app --reload


#!/bin/bash

set -o errexit
set -o pipefail
set -o nounset

uvicorn app.main:app --host 0.0.0.0 --port 5000 --reload