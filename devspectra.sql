-- DevSpectra PostgreSQL Database Dump
-- Generated on 2026-09-15T10:25:01.215Z

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

INSERT INTO "blogs" ("id", "title", "slug", "excerpt", "content", "image", "category", "tags", "author", "readTime", "isFeatured", "isActive", "order", "createdAt", "updatedAt") VALUES ('a9b923aa-90ba-49c1-a5fc-dc147b07091d', 'Things to Look for When Comparing Branding Alternatives', 'things-to-look-for-when-comparing-branding-alternatives', 'Discover key elements when comparing branding strategy alternatives for your agency or digital product.', 'Building a cohesive visual identity requires evaluating design systems, brand guidelines, and positioning. Learn how to compare branding alternatives effectively.', 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop', 'BRANDING', 'BRANDING,DESIGN', 'DevSpectra Design Team', '4 min read', TRUE, TRUE, 1, '2026-09-10T09:50:01.552Z', '2026-09-10T09:50:01.552Z');
INSERT INTO "blogs" ("id", "title", "slug", "excerpt", "content", "image", "category", "tags", "author", "readTime", "isFeatured", "isActive", "order", "createdAt", "updatedAt") VALUES ('f084aac7-5978-431a-8f74-905d93561181', '5 Stand-out Features of Branding You Should Know', '5-stand-out-features-of-branding-you-should-know', 'Explore the 5 standalone branding features that elevate digital products from ordinary to iconic.', 'Consistency, emotional resonance, visual typography, tone of voice, and interactive motion form the core pillars of iconic brand design.', 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1200&auto=format&fit=crop', 'BRANDING', 'BRANDING,DESIGN', 'DevSpectra Design Team', '5 min read', TRUE, TRUE, 2, '2026-09-10T09:50:01.593Z', '2026-09-10T09:50:01.593Z');
INSERT INTO "blogs" ("id", "title", "slug", "excerpt", "content", "image", "category", "tags", "author", "readTime", "isFeatured", "isActive", "order", "createdAt", "updatedAt") VALUES ('310d397a-cbe9-49c1-b83b-2b5e8e2f5c0f', 'Branding: What Real Customers Have To Say', 'branding-what-real-customers-have-to-say', 'Real feedback and case insights from customers on how branding influences trust and engagement.', 'User feedback demonstrates that clear design hierarchy and modern aesthetics significantly boost user trust and retention.', 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop', 'BRANDING', 'BRANDING,DESIGN', 'DevSpectra Research', '3 min read', FALSE, TRUE, 3, '2026-09-10T09:50:01.602Z', '2026-09-10T09:50:01.602Z');
INSERT INTO "blogs" ("id", "title", "slug", "excerpt", "content", "image", "category", "tags", "author", "readTime", "isFeatured", "isActive", "order", "createdAt", "updatedAt") VALUES ('67477a0d-d89f-43b7-a03e-5dc5f2277f05', 'Branding: Pros and Cons They Don''t Tell You', 'branding-pros-and-cons-they-dont-tell-you', 'An honest look into the investment, timeline, and trade-offs when executing a full brand refresh.', 'While rebranding drives growth, it requires strategic alignment, asset audits, and careful migration of existing customer equity.', 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop', 'BRANDING', 'BRANDING,DESIGN', 'DevSpectra Strategy', '6 min read', FALSE, TRUE, 4, '2026-09-10T09:50:01.606Z', '2026-09-10T09:50:01.606Z');
INSERT INTO "blogs" ("id", "title", "slug", "excerpt", "content", "image", "category", "tags", "author", "readTime", "isFeatured", "isActive", "order", "createdAt", "updatedAt") VALUES ('d52215d2-a817-40dd-bc19-772b812295d4', 'How to Spot the Best Branding for You: Signs and Features', 'how-to-spot-the-best-branding-for-you-signs-and-features', 'Practical guidelines to help founders and engineering teams select appropriate brand systems.', 'Identify brand assets that scale across web apps, mobile interfaces, and digital marketing collaterals.', 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop', 'DESIGN', 'DESIGN,BRANDING', 'DevSpectra Design Team', '4 min read', FALSE, TRUE, 5, '2026-09-10T09:50:01.611Z', '2026-09-10T09:50:01.611Z');
INSERT INTO "blogs" ("id", "title", "slug", "excerpt", "content", "image", "category", "tags", "author", "readTime", "isFeatured", "isActive", "order", "createdAt", "updatedAt") VALUES ('22d00fac-93cb-4c1f-8f57-a3a5c9408254', 'How Much Should I Spend on Branding?', 'how-much-should-i-spend-on-branding', 'Budgeting considerations for early stage startups versus scaling digital enterprises.', 'Understand cost breakdowns across discovery, logo design, design system tokenization, and web guidelines.', 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop', 'DESIGN', 'DESIGN,BUSINESS', 'DevSpectra Leadership', '5 min read', FALSE, TRUE, 6, '2026-09-10T09:50:01.617Z', '2026-09-10T09:50:01.617Z');
INSERT INTO "blogs" ("id", "title", "slug", "excerpt", "content", "image", "category", "tags", "author", "readTime", "isFeatured", "isActive", "order", "createdAt", "updatedAt") VALUES ('106da85e-7276-4ed0-b9e4-0514e7e20ca2', 'Rookie Mistakes You''re Making With Your Branding', 'rookie-mistakes-youre-making-with-your-branding', 'Avoid common pitfalls like inconsistent color palettes, missing responsive assets, or poor contrast.', 'Avoid over-complicating logomarks, ignoring accessibility guidelines, and skipping dark mode UI tokens.', 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop', 'DESIGN', 'DESIGN,UI/UX', 'DevSpectra Design Team', '4 min read', FALSE, TRUE, 7, '2026-09-10T09:50:01.622Z', '2026-09-10T09:50:01.622Z');
INSERT INTO "blogs" ("id", "title", "slug", "excerpt", "content", "image", "category", "tags", "author", "readTime", "isFeatured", "isActive", "order", "createdAt", "updatedAt") VALUES ('3615454b-dd92-4bce-a356-3fc2b7ce820c', 'Real Branding Customer Reviews You Need to See', 'real-branding-customer-reviews-you-need-to-see', 'Insights and client stories from recent identity redesign projects across web and mobile platforms.', 'Explore how targeted design modernizations helped partner platforms double user onboarding conversion rates.', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop', 'BRANDING', 'BRANDING,CASE STUDY', 'DevSpectra Team', '5 min read', FALSE, TRUE, 8, '2026-09-10T09:50:01.626Z', '2026-09-10T09:50:01.626Z');

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

INSERT INTO "contact_fields" ("id", "label", "name", "type", "placeholder", "options", "isRequired", "halfWidth", "order", "isActive", "createdAt") VALUES ('dc038989-c6b0-4800-93e3-69c47017d777', 'First Name', 'firstName', 'text', 'First Name *', NULL, TRUE, TRUE, 1, TRUE, '2026-09-03T08:54:48.437Z');
INSERT INTO "contact_fields" ("id", "label", "name", "type", "placeholder", "options", "isRequired", "halfWidth", "order", "isActive", "createdAt") VALUES ('a1d10d5f-d079-4469-873e-4ba50a15a97c', 'Last Name', 'lastName', 'text', 'Last Name *', NULL, TRUE, TRUE, 2, TRUE, '2026-09-03T08:54:48.466Z');
INSERT INTO "contact_fields" ("id", "label", "name", "type", "placeholder", "options", "isRequired", "halfWidth", "order", "isActive", "createdAt") VALUES ('32753261-2d1d-4060-bb10-ac05f15fa74f', 'Email', 'email', 'email', 'Email *', NULL, TRUE, TRUE, 3, TRUE, '2026-09-03T08:54:48.472Z');
INSERT INTO "contact_fields" ("id", "label", "name", "type", "placeholder", "options", "isRequired", "halfWidth", "order", "isActive", "createdAt") VALUES ('ced33744-06d5-41ab-8c14-c6134f60016a', 'Phone Number', 'phone', 'tel', 'Phone Number *', NULL, FALSE, TRUE, 4, TRUE, '2026-09-03T08:54:48.480Z');
INSERT INTO "contact_fields" ("id", "label", "name", "type", "placeholder", "options", "isRequired", "halfWidth", "order", "isActive", "createdAt") VALUES ('34c5a853-d32a-4f36-b01e-40080eb43cac', 'Message', 'message', 'textarea', 'Message *', NULL, TRUE, FALSE, 6, TRUE, '2026-09-03T08:54:48.493Z');
INSERT INTO "contact_fields" ("id", "label", "name", "type", "placeholder", "options", "isRequired", "halfWidth", "order", "isActive", "createdAt") VALUES ('c1628882-4d14-450e-9bd4-08bb3f382879', 'Service Needed', 'service', 'select', 'Service *', 'Website,Mobile App,E-Commerce,UI/UX Design,Digital Marketing,SaaS Product,Other', TRUE, FALSE, 5, TRUE, '2026-09-03T08:54:48.485Z');

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

INSERT INTO "contacts" ("id", "name", "email", "phone", "subject", "message", "isRead", "createdAt", "customData") VALUES ('447f9d4b-4e6d-4ff6-95b3-52221a710680', 'John Doe', 'john@example.com', '+1 234 567 8900', 'Mobile App', 'We need a full mobile app development solution.', FALSE, '2026-09-03T09:07:18.864Z', '{"firstName":"John","lastName":"Doe","email":"john@example.com","phone":"+1 234 567 8900","service":"Mobile App","message":"We need a full mobile app development solution.","budget_range":",000 - ,000"}');

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

INSERT INTO "job_positions" ("id", "title", "location", "type", "description", "isActive", "order", "createdAt", "updatedAt") VALUES ('dec2e960-8841-4783-989e-a4a4015226ff', 'Marketing Expert', 'Remote - US/Canada', 'Full Time', NULL, TRUE, 1, '2026-09-10T04:49:27.421Z', '2026-09-10T04:49:27.421Z');
INSERT INTO "job_positions" ("id", "title", "location", "type", "description", "isActive", "order", "createdAt", "updatedAt") VALUES ('7f138502-8ba6-43a6-a0ec-06d1b214d770', 'Graphic Designer', 'Remote - UK/Italy', 'Full Time', NULL, TRUE, 2, '2026-09-10T04:49:27.433Z', '2026-09-10T04:49:27.433Z');
INSERT INTO "job_positions" ("id", "title", "location", "type", "description", "isActive", "order", "createdAt", "updatedAt") VALUES ('5c80e7da-7f61-4634-a887-08818cbbc383', 'Project Manager', 'Remote - Australia', 'Full Time', NULL, TRUE, 3, '2026-09-10T04:49:27.444Z', '2026-09-10T04:49:27.444Z');
INSERT INTO "job_positions" ("id", "title", "location", "type", "description", "isActive", "order", "createdAt", "updatedAt") VALUES ('9bc3d35f-a964-4f26-88f5-a5f6d577f371', 'SEO Specialist', 'Remote - France', 'Full Time', NULL, TRUE, 4, '2026-09-10T04:49:27.455Z', '2026-09-10T04:49:27.455Z');
INSERT INTO "job_positions" ("id", "title", "location", "type", "description", "isActive", "order", "createdAt", "updatedAt") VALUES ('5a2d5464-33ff-447b-aa8b-7f15d1013ba8', 'Senior Developer', 'Remote - US/Canada', 'Full Time', NULL, TRUE, 5, '2026-09-10T04:49:27.466Z', '2026-09-10T04:49:27.466Z');
INSERT INTO "job_positions" ("id", "title", "location", "type", "description", "isActive", "order", "createdAt", "updatedAt") VALUES ('061fd87e-69fa-4d7c-9240-22819e4ecb21', 'UI Designer', 'Remote - Canada', 'Full Time', NULL, TRUE, 6, '2026-09-10T04:49:27.475Z', '2026-09-10T04:49:27.475Z');
INSERT INTO "job_positions" ("id", "title", "location", "type", "description", "isActive", "order", "createdAt", "updatedAt") VALUES ('177552d6-1eee-48a9-9d4d-87bd8199c2d0', 'Digital Marketing Analyst', 'Remote - US/Canada', 'Full Time', NULL, TRUE, 7, '2026-09-10T04:49:27.484Z', '2026-09-10T04:49:27.484Z');
INSERT INTO "job_positions" ("id", "title", "location", "type", "description", "isActive", "order", "createdAt", "updatedAt") VALUES ('51ae65e7-3185-4162-a90e-fbc9256cb858', 'UI/UX Designer', 'Remote - Canada', 'Full Time', NULL, TRUE, 8, '2026-09-10T04:49:27.494Z', '2026-09-10T04:49:27.494Z');
INSERT INTO "job_positions" ("id", "title", "location", "type", "description", "isActive", "order", "createdAt", "updatedAt") VALUES ('c1be8915-383a-49e8-b039-61089c052b50', 'Full Stack Developer', 'Remote - US/Canada', 'Full Time', NULL, TRUE, 9, '2026-09-10T04:49:27.503Z', '2026-09-10T04:49:27.503Z');

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

INSERT INTO "office_locations" ("id", "name", "city", "address", "phone", "hours", "status", "embedUrl", "directUrl", "isPrimary", "order", "createdAt", "updatedAt") VALUES ('10dfe51c-a6f6-449f-9e7c-84e581d7e721', 'Chennai Headquarters', 'Chennai, Tamil Nadu', '18, 2nd St, Vani Nagar,Jai nagar, Valasaravakkam, Chennai, Tamil Nadu-600087', '9600941222 / 7339041222', 'Mon - Sat : 9:30 - 6:30', 'Open Now', '[https://maps.google.com/maps?q=18,+2nd+St,+Vani+Nagar,+Jai+Nagar,+Valasaravakkam,+Chennai,+Tamil+Nadu+600087&t=&z=15&ie=UTF8&iwloc=&output=embed](https://maps.google.com/maps?q=18,+2nd+St,+Vani+Nagar,+Jai+Nagar,+Valasaravakkam,+Chennai,+Tamil+Nadu+600087\&t=\&z=15\&ie=UTF8\&iwloc=\&output=embed)', '[https://maps.google.com/?q=18,+2nd+St,+Vani+Nagar,+Jai+Nagar,+Valasaravakkam,+Chennai,+Tamil+Nadu+600087](https://maps.google.com/?q=18,+2nd+St,+Vani+Nagar,+Jai+Nagar,+Valasaravakkam,+Chennai,+Tamil+Nadu+600087)', TRUE, 1, '2026-09-04T10:22:47.219Z', '2026-09-12T05:39:50.538Z');
INSERT INTO "office_locations" ("id", "name", "city", "address", "phone", "hours", "status", "embedUrl", "directUrl", "isPrimary", "order", "createdAt", "updatedAt") VALUES ('cd957d22-cf92-4cb7-857b-b084d59c3043', 'Kanchipuram Office', 'Kanchipuram, Tamil Nadu', 'Kanchipuram, Tamil Nadu 631501', '9600941222 / 7339041222', 'Mon - Sat : 9:30 - 6:30', 'Open Now', '[https://maps.google.com/maps?q=Kanchipuram,+Tamil+Nadu&t=&z=14&ie=UTF8&iwloc=&output=embed](https://maps.google.com/maps?q=Kanchipuram,+Tamil+Nadu\&t=\&z=14\&ie=UTF8\&iwloc=\&output=embed)', '[https://maps.google.com/?q=Kanchipuram,+Tamil+Nadu](https://maps.google.com/?q=Kanchipuram,+Tamil+Nadu)', FALSE, 2, '2026-09-04T10:22:48.530Z', '2026-09-15T09:14:09.346Z');
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

INSERT INTO "projects" ("id", "title", "slug", "description", "shortDescription", "category", "technologies", "githubUrl", "liveUrl", "thumbnail", "images", "featured", "displayOrder", "status", "createdAt", "updatedAt", "isOngoing") VALUES ('5e024bdf-71b8-4e52-8090-98dad7e90deb', 'Seatown Design', 'seatown-uiux', 'Seatown Experience & Interface Design.', 'Seashore & Marine UI Design.', 'UI/UX Design', 'Figma,UI/UX,Wireframing', NULL, 'https://seatown.com', '/portfolio/uiux-2.jpg', NULL, FALSE, 11, 'published', '2026-09-15T09:39:45.792Z', '2026-09-15T09:39:45.792Z', FALSE);
INSERT INTO "projects" ("id", "title", "slug", "description", "shortDescription", "category", "technologies", "githubUrl", "liveUrl", "thumbnail", "images", "featured", "displayOrder", "status", "createdAt", "updatedAt", "isOngoing") VALUES ('1251b43f-934a-4043-9e45-70980f64e146', 'School Website Design', 'school-website-uiux', 'Educational Institution UI/UX Layout.', 'Modern Academic Portal Design.', 'UI/UX Design', 'Figma,UI Design,User Journey', NULL, 'https://schoolwebsite.com', '/portfolio/uiux-3.jpg', NULL, FALSE, 12, 'published', '2026-09-15T09:39:45.801Z', '2026-09-15T09:39:45.801Z', FALSE);
INSERT INTO "projects" ("id", "title", "slug", "description", "shortDescription", "category", "technologies", "githubUrl", "liveUrl", "thumbnail", "images", "featured", "displayOrder", "status", "createdAt", "updatedAt", "isOngoing") VALUES ('9e3cd300-8dac-40cf-98dd-a669458b5079', 'Silicon Vista Design', 'silicon-vista-uiux', 'Learning Portal UI/UX Redesign.', 'Interactive Learning Dashboard UI.', 'UI/UX Design', 'Figma,Design System,Prototyping', NULL, 'https://siliconvista.com', '/portfolio/uiux-4.jpg', NULL, FALSE, 13, 'published', '2026-09-15T09:39:45.810Z', '2026-09-15T09:39:45.810Z', FALSE);
INSERT INTO "projects" ("id", "title", "slug", "description", "shortDescription", "category", "technologies", "githubUrl", "liveUrl", "thumbnail", "images", "featured", "displayOrder", "status", "createdAt", "updatedAt", "isOngoing") VALUES ('0143b7ca-b649-4001-9f8a-7efbed4401e9', 'SEO Growth Campaign', 'seo-growth-campaign', 'Growth & Search Engine Optimization.', 'Organic Traffic & Keyword Strategy.', 'Digital Marketing', 'SEO,Google Analytics,Semrush', NULL, 'https://seo-agency.com', '/portfolio/digital-1.jpg', NULL, FALSE, 14, 'published', '2026-09-15T09:39:45.816Z', '2026-09-15T09:39:45.816Z', FALSE);
INSERT INTO "projects" ("id", "title", "slug", "description", "shortDescription", "category", "technologies", "githubUrl", "liveUrl", "thumbnail", "images", "featured", "displayOrder", "status", "createdAt", "updatedAt", "isOngoing") VALUES ('453a984b-7453-4c93-81b9-ccb27c8cebac', 'Poster & Media Creative', 'poster-making-campaign', 'LinkedIn, Instagram, Facebook Media Designs.', 'Social Media Creative Visuals.', 'Digital Marketing', 'Photoshop,Canva,Social Media', NULL, 'https://postermaking.com', '/portfolio/digital-2.jpg', NULL, FALSE, 15, 'published', '2026-09-15T09:39:45.826Z', '2026-09-15T09:39:45.826Z', FALSE);
INSERT INTO "projects" ("id", "title", "slug", "description", "shortDescription", "category", "technologies", "githubUrl", "liveUrl", "thumbnail", "images", "featured", "displayOrder", "status", "createdAt", "updatedAt", "isOngoing") VALUES ('316b6f70-c6b1-48a8-b004-ae98246d7542', 'Reels & Short Video', 'reels-studio-campaign', 'Instagram Reels & Short Video Strategy.', 'Viral Video Content Production.', 'Digital Marketing', 'Premiere Pro,CapCut,Reels', NULL, 'https://reelsstudio.com', '/portfolio/digital-3.jpg', NULL, FALSE, 16, 'published', '2026-09-15T09:39:45.836Z', '2026-09-15T09:39:45.836Z', FALSE);
INSERT INTO "projects" ("id", "title", "slug", "description", "shortDescription", "category", "technologies", "githubUrl", "liveUrl", "thumbnail", "images", "featured", "displayOrder", "status", "createdAt", "updatedAt", "isOngoing") VALUES ('16977a96-a5bd-49de-83b8-bf1fcb7355b9', 'Content Distribution', 'content-strategy-campaign', 'Brand Messaging & Content Distribution.', 'Multi-channel Copywriting & Distribution.', 'Digital Marketing', 'Copywriting,Content Marketing,HubSpot', NULL, 'https://contentagency.com', '/portfolio/digital-4.jpg', NULL, FALSE, 17, 'published', '2026-09-15T09:39:45.847Z', '2026-09-15T09:39:45.847Z', FALSE);
INSERT INTO "projects" ("id", "title", "slug", "description", "shortDescription", "category", "technologies", "githubUrl", "liveUrl", "thumbnail", "images", "featured", "displayOrder", "status", "createdAt", "updatedAt", "isOngoing") VALUES ('5ff120b5-7009-4c8d-83c5-20db0a54ab41', 'Silicon Vista', 'silicon-vista-website', 'Learning Platform.', 'Over 10k active daily users.', 'Website', 'React,Node.js,MongoDB', NULL, 'https://siliconvista.com', '/portfolio/website-4.jpg', NULL, FALSE, 4, 'published', '2026-09-15T09:39:45.706Z', '2026-09-15T09:49:29.011Z', FALSE);
INSERT INTO "projects" ("id", "title", "slug", "description", "shortDescription", "category", "technologies", "githubUrl", "liveUrl", "thumbnail", "images", "featured", "displayOrder", "status", "createdAt", "updatedAt", "isOngoing") VALUES ('88d4dcdb-286d-4b03-9f0b-968eb1d90090', 'Co-Tea', 'co-tea', 'Coffee meets tea.', 'Custom Shopify Plus storefront.', 'Website', 'Shopify,Liquid,React', NULL, 'https://co-tea.com', '/portfolio/website-3.jpg', NULL, FALSE, 3, 'published', '2026-09-15T09:39:45.694Z', '2026-09-15T09:49:59.477Z', FALSE);
INSERT INTO "projects" ("id", "title", "slug", "description", "shortDescription", "category", "technologies", "githubUrl", "liveUrl", "thumbnail", "images", "featured", "displayOrder", "status", "createdAt", "updatedAt", "isOngoing") VALUES ('bd660d47-445d-468c-b41a-1ad37f642888', 'DevSpectra Web App', 'devspectra-web-app', 'Modern web tech agency platform', NULL, 'Website', 'React,NestJS,PostgreSQL', NULL, 'https://devspectra.com', '/portfolio/website-1.jpg', NULL, FALSE, 0, 'published', '2026-09-02T06:15:23.605Z', '2026-09-15T10:09:29.864Z', TRUE);
INSERT INTO "projects" ("id", "title", "slug", "description", "shortDescription", "category", "technologies", "githubUrl", "liveUrl", "thumbnail", "images", "featured", "displayOrder", "status", "createdAt", "updatedAt", "isOngoing") VALUES ('0abe07d5-8195-4f57-b25f-f31d785f702b', 'NSkill India', 'nskill-india', 'Ed Tech Platform.', 'From ideation to launch in 12 wks.', 'Website', 'React,Next.js,PostgreSQL', NULL, 'https://nskillindia.com', '/portfolio/website-1.jpg', NULL, FALSE, 1, 'published', '2026-09-15T09:39:45.627Z', '2026-09-15T09:39:45.627Z', FALSE);
INSERT INTO "projects" ("id", "title", "slug", "description", "shortDescription", "category", "technologies", "githubUrl", "liveUrl", "thumbnail", "images", "featured", "displayOrder", "status", "createdAt", "updatedAt", "isOngoing") VALUES ('4ba4bfcc-cd15-4b75-9882-3a3d79d95333', 'Seatown', 'seatown-website', 'The magic of the sea.', 'Built with Next.js & Postgres.', 'Website', 'Next.js,PostgreSQL,TailwindCSS', NULL, 'https://seatown.com', '/portfolio/website-2.jpg', NULL, FALSE, 2, 'published', '2026-09-15T09:39:45.679Z', '2026-09-15T09:39:45.679Z', FALSE);
INSERT INTO "projects" ("id", "title", "slug", "description", "shortDescription", "category", "technologies", "githubUrl", "liveUrl", "thumbnail", "images", "featured", "displayOrder", "status", "createdAt", "updatedAt", "isOngoing") VALUES ('5f3d6472-8519-4c81-b3eb-523fb25e08b2', 'Veerify', 'veerify-mobile', 'Mobile App for Instant Identity Verification.', 'Instant ID & Document Verification.', 'Mobile App', 'React Native,TypeScript,Node.js', NULL, 'https://veerify.com', '/portfolio/mobile-1.jpg', NULL, FALSE, 5, 'published', '2026-09-15T09:39:45.717Z', '2026-09-15T09:39:45.717Z', FALSE);
INSERT INTO "projects" ("id", "title", "slug", "description", "shortDescription", "category", "technologies", "githubUrl", "liveUrl", "thumbnail", "images", "featured", "displayOrder", "status", "createdAt", "updatedAt", "isOngoing") VALUES ('ed2d9103-c9ff-4072-917f-302699a0d003', 'Snapoo', 'snapoo-mobile', 'Mobile Social Sharing App.', 'Social Media & Photo Sharing.', 'Mobile App', 'Flutter,Firebase,Dart', NULL, 'https://snapoo.com', '/portfolio/mobile-2.jpg', NULL, FALSE, 6, 'published', '2026-09-15T09:39:45.739Z', '2026-09-15T09:39:45.739Z', FALSE);
INSERT INTO "projects" ("id", "title", "slug", "description", "shortDescription", "category", "technologies", "githubUrl", "liveUrl", "thumbnail", "images", "featured", "displayOrder", "status", "createdAt", "updatedAt", "isOngoing") VALUES ('4cefc53c-151e-49b6-a620-5bf15ae889dc', 'Martial Art', 'martial-art-mobile', 'Mobile Fitness & Martial Arts Training App.', 'Fitness & Martial Arts Coaching.', 'Mobile App', 'React Native,Redux,Express', NULL, 'https://martialart.com', '/portfolio/mobile-3.jpg', NULL, FALSE, 7, 'published', '2026-09-15T09:39:45.748Z', '2026-09-15T09:39:45.748Z', FALSE);
INSERT INTO "projects" ("id", "title", "slug", "description", "shortDescription", "category", "technologies", "githubUrl", "liveUrl", "thumbnail", "images", "featured", "displayOrder", "status", "createdAt", "updatedAt", "isOngoing") VALUES ('d60b90c8-6812-49c9-b707-bce83582382e', 'SM-Enterprises', 'sm-enterprises', 'E-Commerce Storefront & Order Management System.', 'B2B & B2C Wholesale E-Commerce.', 'E-Commerce', 'Next.js,Stripe,PostgreSQL', NULL, 'https://smenterprises.com', '/portfolio/ecommerce-1.jpg', NULL, FALSE, 8, 'published', '2026-09-15T09:39:45.758Z', '2026-09-15T09:39:45.758Z', FALSE);
INSERT INTO "projects" ("id", "title", "slug", "description", "shortDescription", "category", "technologies", "githubUrl", "liveUrl", "thumbnail", "images", "featured", "displayOrder", "status", "createdAt", "updatedAt", "isOngoing") VALUES ('39966ac7-95d1-4fb5-b0b4-8405ada65430', 'Cloth Buy', 'cloth-buy', 'Fashion E-Commerce Shopping Experience.', 'Modern Clothing & Apparel Store.', 'E-Commerce', 'Shopify,React,TailwindCSS', NULL, 'https://clothbuy.com', '/portfolio/ecommerce-2.jpg', NULL, FALSE, 9, 'published', '2026-09-15T09:39:45.768Z', '2026-09-15T09:39:45.768Z', FALSE);
INSERT INTO "projects" ("id", "title", "slug", "description", "shortDescription", "category", "technologies", "githubUrl", "liveUrl", "thumbnail", "images", "featured", "displayOrder", "status", "createdAt", "updatedAt", "isOngoing") VALUES ('c727d529-ef83-4b6a-9f50-91c03ea62b83', 'Katalist Design', 'katalist-uiux', 'UI/UX Design & Prototyping System.', 'Figma Design System & UI Kit.', 'UI/UX Design', 'Figma,Prototyping,User Research', NULL, 'https://katalist.com', '/portfolio/uiux-1.jpg', NULL, FALSE, 10, 'published', '2026-09-15T09:39:45.781Z', '2026-09-15T09:39:45.781Z', FALSE);

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

INSERT INTO "social_links" ("id", "platform", "icon", "url", "isActive", "order", "createdAt", "updatedAt") VALUES ('3a893f3b-cf04-4c00-9ab3-26e8458dfcd2', 'Facebook', 'facebook', 'https://www.facebook.com/', TRUE, 1, '2026-09-10T15:51:02.541Z', '2026-09-10T15:51:02.541Z');
INSERT INTO "social_links" ("id", "platform", "icon", "url", "isActive", "order", "createdAt", "updatedAt") VALUES ('bf4e0ab9-0497-4759-9cae-81831cd0bde7', 'LinkedIn', 'linkedin', 'https://www.linkedin.com/', TRUE, 3, '2026-09-15T08:55:09.182Z', '2026-09-15T08:55:09.182Z');
INSERT INTO "social_links" ("id", "platform", "icon", "url", "isActive", "order", "createdAt", "updatedAt") VALUES ('55b4db68-599f-4905-bca1-9db42f46d553', 'YouTube', 'youtube', 'https://www.youtube.com/', TRUE, 5, '2026-09-15T08:55:09.199Z', '2026-09-15T08:55:09.199Z');
INSERT INTO "social_links" ("id", "platform", "icon", "url", "isActive", "order", "createdAt", "updatedAt") VALUES ('12d0b37d-2a3a-4194-913c-542fc4a88252', 'whatsapp', 'whatsapp', 'https://whatsapp.com', TRUE, 1, '2026-09-15T08:55:47.427Z', '2026-09-15T08:56:05.822Z');

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

INSERT INTO "trusted_clients" ("id", "name", "src", "isActive", "order", "createdAt", "updatedAt") VALUES ('410b90ec-f214-4b1e-af61-ca2edce09f44', 'Amazon Web Services', '/contact/amazonaws.svg', TRUE, 1, '2026-09-10T04:49:20.762Z', '2026-09-10T04:49:20.762Z');
INSERT INTO "trusted_clients" ("id", "name", "src", "isActive", "order", "createdAt", "updatedAt") VALUES ('fd905078-f019-4cd2-9cea-0995135f4a68', 'Apple', '/contact/apple.svg', TRUE, 2, '2026-09-10T04:49:27.312Z', '2026-09-10T04:49:27.312Z');
INSERT INTO "trusted_clients" ("id", "name", "src", "isActive", "order", "createdAt", "updatedAt") VALUES ('7eeb58a1-c667-4d24-ac9c-c20dfbf56594', 'Docker', '/contact/docker.svg', TRUE, 3, '2026-09-10T04:49:27.329Z', '2026-09-10T04:49:27.329Z');
INSERT INTO "trusted_clients" ("id", "name", "src", "isActive", "order", "createdAt", "updatedAt") VALUES ('f8e0652e-8367-4a6b-b474-801d6ce75dab', 'Google', '/contact/google.svg', TRUE, 4, '2026-09-10T04:49:27.342Z', '2026-09-10T04:49:27.342Z');
INSERT INTO "trusted_clients" ("id", "name", "src", "isActive", "order", "createdAt", "updatedAt") VALUES ('fcc60b6f-080a-4c38-86fc-4a15a7cb5a23', 'GitHub', '/contact/github.svg', TRUE, 5, '2026-09-10T04:49:27.360Z', '2026-09-10T04:49:27.360Z');
INSERT INTO "trusted_clients" ("id", "name", "src", "isActive", "order", "createdAt", "updatedAt") VALUES ('76bce4b3-0dda-41e1-bfff-72049e4f654b', 'React', '/contact/react.svg', TRUE, 6, '2026-09-10T04:49:27.372Z', '2026-09-10T04:49:27.372Z');
INSERT INTO "trusted_clients" ("id", "name", "src", "isActive", "order", "createdAt", "updatedAt") VALUES ('efff5538-2e86-498b-a4e6-a5da30f65cd5', 'MongoDB', '/contact/mongodb.svg', TRUE, 7, '2026-09-10T04:49:27.390Z', '2026-09-10T04:49:27.390Z');
INSERT INTO "trusted_clients" ("id", "name", "src", "isActive", "order", "createdAt", "updatedAt") VALUES ('7f94b6ae-0cce-4095-9193-effd697337ce', 'TypeScript', '/contact/typescript.svg', TRUE, 8, '2026-09-10T04:49:27.405Z', '2026-09-10T04:49:27.405Z');

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

INSERT INTO "users" ("id", "name", "email", "password", "is_active", "last_login", "created_at", "updated_at", "role") VALUES ('d30d3f9a-ac28-4e8d-9a4b-b4e39b3a651a', 'Super Admin', 'admin@portfolio.com', '$2b$10$CUcY9atVaLwJDl0v7kLMceu4XiXr41j021BZ/jXpu3GMrR8MP01TK', TRUE, NULL, '2026-09-01T09:36:09.408Z', '2026-09-01T09:36:09.408Z', 'SUPER_ADMIN');
INSERT INTO "users" ("id", "name", "email", "password", "is_active", "last_login", "created_at", "updated_at", "role") VALUES ('f54c66a6-63f0-4160-aee6-cfd2a96a2db7', 'Super Admin', 'admin@devspectra.com', '$2b$10$JG1LxlSstrZH/02xH1xCE./taCcO1bXHdsymtnESlTu1SdJVoaHgu', TRUE, NULL, '2026-09-01T09:57:37.492Z', '2026-09-01T09:57:37.492Z', 'SUPER_ADMIN');

