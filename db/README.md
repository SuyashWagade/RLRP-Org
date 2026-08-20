# RLRP Savali Nivara Kendra Database (PostgreSQL)

This directory contains the PostgreSQL database configuration, relational schema, and seed dataset for RLRP Savali Nivara Kendra.

## Directory Structure
- `schema.sql`: Contains PostgreSQL DDL table declarations for `users`, `programs`, `impact_metrics`, `donations`, and `contact_messages`.
- `seed.sql`: Contains production seed data for all 9 key NGO impact metrics (2010 to 2026) and core work initiatives.
- `setup.js`: Node.js migration utility to run `schema.sql` and `seed.sql` automatically.

## Quick Setup Instructions

1. Ensure PostgreSQL is installed and running locally or via Docker:
```bash
sudo service postgresql start
```

2. Create the database:
```bash
createdb -U postgres rlrp_db
```

3. Execute Schema & Seeds:
```bash
psql -U postgres -d rlrp_db -f schema.sql
psql -U postgres -d rlrp_db -f seed.sql
```

4. Alternatively run the automatic JS setup helper:
```bash
node setup.js
```
