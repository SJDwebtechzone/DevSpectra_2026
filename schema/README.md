# DevSpectra Database Schema & Initial Data

This directory contains the database SQL dump files for the **DevSpectra** web application. When pushing this project to GitHub or sharing it with team members/managers, anyone cloning the repository can easily set up the complete database locally.

---

## 📁 Included Files

* **`schema.sql`**: Full SQL dump containing table structures (DDL) and initial data for all 8 database tables (`users`, `projects`, `contacts`, `contact_fields`, `office_locations`, `reviews`, `google_reviews`, `migrations`).
* **`devspectra_database.sql`**: Secondary database dump copy for reference.

---

## 🛠️ How to Import into PostgreSQL

### Option A: Using Command Line (`psql`)

```bash
# 1. Create the PostgreSQL database (if it doesn't exist yet)
createdb -U postgres devspectra

# 2. Import the schema and data
psql -U postgres -d devspectra -f schema/schema.sql
```

### Option B: Using GUI Tools (PgAdmin / DBeaver / TablePlus)

1. Connect to your PostgreSQL server.
2. Create a new database named `devspectra`.
3. Open `schema/schema.sql` in your SQL Query Tool and click **Run Script / Execute**.

---

## 🔑 Default Environment Credentials

In `backend/.env`:
* **Host**: `localhost`
* **Port**: `5432`
* **Username**: `postgres`
* **Password**: `postgres`
* **Database Name**: `devspectra`
