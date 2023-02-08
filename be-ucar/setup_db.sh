#!/bin/bash
set -e

/etc/init.d/postgresql start
psql -f init.sql    
/etc/init.d/postgresql stop