-- DevSpectra PostgreSQL Database Schema (CREATE TABLE Statements Only)
-- Generated on 2026-09-15T10:58:21.700Z

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Table: blogs
DROP TABLE IF EXISTS "blogs" CASCADE;

CREATE TABLE "blogs" (
  "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
  "title" CHARACTER VARYING NOT NULL,
  "slug" CHARACTER VARYING,
  "excerpt" TEXT,
  "content" TEXT,
  "image" CHARACTER VARYING,
  "category" CHARACTER VARYING NOT NULL DEFAULT 'General'::character varying,
  "tags" TEXT,
  "author" CHARACTER VARYING NOT NULL DEFAULT 'DevSpectra Team'::character varying,
  "readTime" CHARACTER VARYING NOT NULL DEFAULT '5 min read'::character varying,
  "isFeatured" BOOLEAN NOT NULL DEFAULT false,
  "isActive" BOOLEAN NOT NULL DEFAULT true,
  "order" INTEGER NOT NULL DEFAULT 0,
  "createdAt" TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT now(),
  "updatedAt" TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT now()
);

-- Table: contact_fields
DROP TABLE IF EXISTS "contact_fields" CASCADE;

CREATE TABLE "contact_fields" (
  "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
  "label" CHARACTER VARYING NOT NULL,
  "name" CHARACTER VARYING NOT NULL,
  "type" CHARACTER VARYING NOT NULL DEFAULT 'text'::character varying,
  "placeholder" CHARACTER VARYING,
  "options" JSON,
  "isRequired" BOOLEAN NOT NULL DEFAULT true,
  "halfWidth" BOOLEAN NOT NULL DEFAULT false,
  "order" INTEGER NOT NULL DEFAULT 1,
  "isActive" BOOLEAN NOT NULL DEFAULT true,
  "createdAt" TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT now()
);

-- Table: contacts
DROP TABLE IF EXISTS "contacts" CASCADE;

CREATE TABLE "contacts" (
  "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
  "name" CHARACTER VARYING,
  "email" CHARACTER VARYING,
  "phone" CHARACTER VARYING,
  "subject" CHARACTER VARYING,
  "message" TEXT,
  "isRead" BOOLEAN NOT NULL DEFAULT false,
  "createdAt" TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT now(),
  "customData" JSON
);

-- Table: google_reviews
DROP TABLE IF EXISTS "google_reviews" CASCADE;

CREATE TABLE "google_reviews" (
  "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
  "googleReviewId" CHARACTER VARYING NOT NULL,
  "authorName" CHARACTER VARYING NOT NULL,
  "authorPhoto" CHARACTER VARYING,
  "profilePhotoUrl" CHARACTER VARYING,
  "rating" INTEGER NOT NULL,
  "reviewText" TEXT NOT NULL,
  "relativeTime" CHARACTER VARYING,
  "reviewTimestamp" TIMESTAMP WITHOUT TIME ZONE,
  "language" CHARACTER VARYING,
  "authorUrl" CHARACTER VARYING,
  "isPublished" BOOLEAN NOT NULL DEFAULT true,
  "createdAt" TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT now(),
  "updatedAt" TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT now()
);

-- Table: job_positions
DROP TABLE IF EXISTS "job_positions" CASCADE;

CREATE TABLE "job_positions" (
  "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
  "title" CHARACTER VARYING NOT NULL,
  "location" CHARACTER VARYING NOT NULL DEFAULT 'Remote - US/Canada'::character varying,
  "type" CHARACTER VARYING NOT NULL DEFAULT 'Full Time'::character varying,
  "description" TEXT,
  "isActive" BOOLEAN NOT NULL DEFAULT true,
  "order" INTEGER NOT NULL DEFAULT 0,
  "createdAt" TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT now(),
  "updatedAt" TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT now()
);

-- Table: migrations
DROP TABLE IF EXISTS "migrations" CASCADE;

CREATE TABLE "migrations" (
  "id" INTEGER NOT NULL DEFAULT nextval('migrations_id_seq'::regclass),
  "timestamp" BIGINT NOT NULL,
  "name" CHARACTER VARYING NOT NULL
);

-- Table: office_locations
DROP TABLE IF EXISTS "office_locations" CASCADE;

CREATE TABLE "office_locations" (
  "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
  "name" CHARACTER VARYING NOT NULL,
  "city" CHARACTER VARYING NOT NULL,
  "address" TEXT NOT NULL,
  "phone" CHARACTER VARYING,
  "hours" CHARACTER VARYING,
  "status" CHARACTER VARYING NOT NULL DEFAULT 'Open Now'::character varying,
  "embedUrl" TEXT NOT NULL,
  "directUrl" TEXT,
  "isPrimary" BOOLEAN NOT NULL DEFAULT false,
  "order" INTEGER NOT NULL DEFAULT 1,
  "createdAt" TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT now(),
  "updatedAt" TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT now()
);

-- Table: projects
DROP TABLE IF EXISTS "projects" CASCADE;

CREATE TABLE "projects" (
  "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
  "title" CHARACTER VARYING NOT NULL,
  "slug" CHARACTER VARYING NOT NULL,
  "description" TEXT NOT NULL,
  "shortDescription" TEXT,
  "category" CHARACTER VARYING NOT NULL,
  "technologies" TEXT NOT NULL,
  "githubUrl" CHARACTER VARYING,
  "liveUrl" CHARACTER VARYING,
  "thumbnail" CHARACTER VARYING,
  "images" TEXT,
  "featured" BOOLEAN NOT NULL DEFAULT false,
  "displayOrder" INTEGER NOT NULL DEFAULT 0,
  "status" CHARACTER VARYING NOT NULL DEFAULT 'draft'::character varying,
  "createdAt" TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT now(),
  "updatedAt" TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT now(),
  "isOngoing" BOOLEAN NOT NULL DEFAULT false
);

-- Table: reviews
DROP TABLE IF EXISTS "reviews" CASCADE;

CREATE TABLE "reviews" (
  "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
  "googleReviewId" CHARACTER VARYING,
  "reviewerName" CHARACTER VARYING NOT NULL,
  "reviewerPhoto" CHARACTER VARYING,
  "rating" INTEGER NOT NULL,
  "reviewText" TEXT NOT NULL,
  "reviewDate" TIMESTAMP WITHOUT TIME ZONE,
  "isVerified" BOOLEAN NOT NULL DEFAULT false,
  "source" CHARACTER VARYING NOT NULL DEFAULT 'Google'::character varying,
  "profileUrl" CHARACTER VARYING,
  "isFeatured" BOOLEAN NOT NULL DEFAULT false,
  "isPublished" BOOLEAN NOT NULL DEFAULT true,
  "displayOrder" INTEGER NOT NULL DEFAULT 0,
  "createdAt" TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT now(),
  "updatedAt" TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT now()
);

-- Table: social_links
DROP TABLE IF EXISTS "social_links" CASCADE;

CREATE TABLE "social_links" (
  "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
  "platform" CHARACTER VARYING NOT NULL,
  "icon" CHARACTER VARYING NOT NULL DEFAULT 'facebook'::character varying,
  "url" CHARACTER VARYING NOT NULL,
  "isActive" BOOLEAN NOT NULL DEFAULT true,
  "order" INTEGER NOT NULL DEFAULT 0,
  "createdAt" TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT now(),
  "updatedAt" TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT now()
);

-- Table: trusted_clients
DROP TABLE IF EXISTS "trusted_clients" CASCADE;

CREATE TABLE "trusted_clients" (
  "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
  "name" CHARACTER VARYING NOT NULL,
  "src" CHARACTER VARYING NOT NULL,
  "isActive" BOOLEAN NOT NULL DEFAULT true,
  "order" INTEGER NOT NULL DEFAULT 0,
  "createdAt" TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT now(),
  "updatedAt" TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT now()
);

-- Table: users
DROP TABLE IF EXISTS "users" CASCADE;

CREATE TABLE "users" (
  "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
  "name" CHARACTER VARYING NOT NULL DEFAULT 'Admin'::character varying,
  "email" CHARACTER VARYING NOT NULL,
  "password" CHARACTER VARYING NOT NULL,
  "is_active" BOOLEAN NOT NULL DEFAULT true,
  "last_login" TIMESTAMP WITHOUT TIME ZONE,
  "created_at" TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT now(),
  "updated_at" TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT now(),
  "role" CHARACTER VARYING NOT NULL DEFAULT 'SUPER_ADMIN'::character varying
);