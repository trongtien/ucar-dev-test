#!/bin/bash
set -e

/etc/init.d/postgresql start
psql -f docker_postgres_init.sql    
/etc/init.d/postgresql stop