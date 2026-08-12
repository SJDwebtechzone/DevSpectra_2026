--
-- PostgreSQL database dump
--

\restrict noaJXT1Z7EMWHierDD3cg7N0BQ47pV2CHFafdfU43c6XVapflb05Fc4THHVov03

-- Dumped from database version 18.3
-- Dumped by pg_dump version 18.3

-- Started on 2026-08-12 13:13:07

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 2 (class 3079 OID 53141)
-- Name: uuid-ossp; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;


--
-- TOC entry 5106 (class 0 OID 0)
-- Dependencies: 2
-- Name: EXTENSION "uuid-ossp"; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 226 (class 1259 OID 53295)
-- Name: contacts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.contacts (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    name character varying NOT NULL,
    email character varying NOT NULL,
    phone character varying,
    subject character varying NOT NULL,
    message text NOT NULL,
    "isRead" boolean DEFAULT false NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.contacts OWNER TO postgres;

--
-- TOC entry 223 (class 1259 OID 52912)
-- Name: dashboard_metrics; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.dashboard_metrics (
    id integer NOT NULL,
    "totalUsers" integer DEFAULT 0 NOT NULL,
    "activeProjects" integer DEFAULT 0 NOT NULL,
    "totalRevenue" integer DEFAULT 0 NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.dashboard_metrics OWNER TO postgres;

--
-- TOC entry 222 (class 1259 OID 52911)
-- Name: dashboard_metrics_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.dashboard_metrics_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.dashboard_metrics_id_seq OWNER TO postgres;

--
-- TOC entry 5107 (class 0 OID 0)
-- Dependencies: 222
-- Name: dashboard_metrics_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.dashboard_metrics_id_seq OWNED BY public.dashboard_metrics.id;


--
-- TOC entry 225 (class 1259 OID 53152)
-- Name: google_reviews; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.google_reviews (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    "googleReviewId" character varying NOT NULL,
    "authorName" character varying NOT NULL,
    "authorPhoto" character varying,
    "profilePhotoUrl" character varying,
    "reviewText" text NOT NULL,
    "relativeTime" character varying,
    "reviewTimestamp" timestamp without time zone,
    language character varying,
    "authorUrl" character varying,
    "isPublished" boolean DEFAULT true NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    rating integer NOT NULL
);


ALTER TABLE public.google_reviews OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 52900)
-- Name: migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.migrations (
    id integer NOT NULL,
    "timestamp" bigint NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE public.migrations OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 52899)
-- Name: migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.migrations_id_seq OWNER TO postgres;

--
-- TOC entry 5108 (class 0 OID 0)
-- Dependencies: 220
-- Name: migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.migrations_id_seq OWNED BY public.migrations.id;


--
-- TOC entry 227 (class 1259 OID 53312)
-- Name: projects; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.projects (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    title character varying NOT NULL,
    slug character varying NOT NULL,
    description text NOT NULL,
    "shortDescription" text,
    category character varying NOT NULL,
    technologies text NOT NULL,
    "githubUrl" character varying,
    "liveUrl" character varying,
    thumbnail character varying,
    images text,
    featured boolean DEFAULT false NOT NULL,
    "displayOrder" integer DEFAULT 0 NOT NULL,
    status character varying DEFAULT 'draft'::character varying NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.projects OWNER TO postgres;

--
-- TOC entry 228 (class 1259 OID 53338)
-- Name: reviews; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.reviews (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    "googleReviewId" character varying,
    "reviewerName" character varying NOT NULL,
    "reviewerPhoto" character varying,
    rating integer NOT NULL,
    "reviewText" text NOT NULL,
    "reviewDate" timestamp without time zone,
    "isVerified" boolean DEFAULT false NOT NULL,
    source character varying DEFAULT 'Google'::character varying NOT NULL,
    "profileUrl" character varying,
    "isFeatured" boolean DEFAULT false NOT NULL,
    "isPublished" boolean DEFAULT true NOT NULL,
    "displayOrder" integer DEFAULT 0 NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.reviews OWNER TO postgres;

--
-- TOC entry 224 (class 1259 OID 53119)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    name character varying(100) NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    role character varying(30) DEFAULT 'SUPER_ADMIN'::character varying NOT NULL,
    is_active boolean DEFAULT true NOT NULL,
    last_login timestamp without time zone,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- TOC entry 4893 (class 2604 OID 52915)
-- Name: dashboard_metrics id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.dashboard_metrics ALTER COLUMN id SET DEFAULT nextval('public.dashboard_metrics_id_seq'::regclass);


--
-- TOC entry 4892 (class 2604 OID 52903)
-- Name: migrations id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.migrations ALTER COLUMN id SET DEFAULT nextval('public.migrations_id_seq'::regclass);


--
-- TOC entry 5098 (class 0 OID 53295)
-- Dependencies: 226
-- Data for Name: contacts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.contacts (id, name, email, phone, subject, message, "isRead", "createdAt") FROM stdin;
\.


--
-- TOC entry 5095 (class 0 OID 52912)
-- Dependencies: 223
-- Data for Name: dashboard_metrics; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.dashboard_metrics (id, "totalUsers", "activeProjects", "totalRevenue", "createdAt", "updatedAt") FROM stdin;
1	142	12	24500	2026-08-01 16:44:37.364527	2026-08-01 16:44:37.364527
\.


--
-- TOC entry 5097 (class 0 OID 53152)
-- Dependencies: 225
-- Data for Name: google_reviews; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.google_reviews (id, "googleReviewId", "authorName", "authorPhoto", "profilePhotoUrl", "reviewText", "relativeTime", "reviewTimestamp", language, "authorUrl", "isPublished", "createdAt", "updatedAt", rating) FROM stdin;
777257e8-87ac-4567-9083-efc2e2708485	places/ChIJr4vQRX9hUjoR987-7Vu4DZg/reviews/Ci9DQUlRQUNvZENodHljRjlvT2tOQk9YbHBMUzFyU0cweGRUQXlkSGMzZDFCRk1sRRAB	Vigneswari Arun	https://lh3.googleusercontent.com/a/ACg8ocI_-9XcNJtEfxOGN3WQArfJl85rv9t_YZ4-yYw-PWqGswfMRA=s128-c0x00000000-cc-rp-mo	https://lh3.googleusercontent.com/a/ACg8ocI_-9XcNJtEfxOGN3WQArfJl85rv9t_YZ4-yYw-PWqGswfMRA=s128-c0x00000000-cc-rp-mo	I had a great experience working with this team. On time delivery and I'm very satisfied with the work. Thank you to the entire team and support and effort.	6 months ago	2026-01-29 11:56:18.838	en	https://www.google.com/maps/contrib/104337609924276000499/reviews	t	2026-08-10 14:18:53.965841	2026-08-10 14:58:24.665265	5
58ec62de-bbfb-4680-8ae7-d90bb3a7c237	places/ChIJr4vQRX9hUjoR987-7Vu4DZg/reviews/Ci9DQUlRQUNvZENodHljRjlvT21VNVExUlJjblF6WDBwWlJqQkZVbVpITlRCR05GRRAB	Archana Arumugam	https://lh3.googleusercontent.com/a/ACg8ocL34uLwFVHQVTyataNbM5yN0BO__Nvj6WO2gOdACwERuo54N3U=s128-c0x00000000-cc-rp-mo	https://lh3.googleusercontent.com/a/ACg8ocL34uLwFVHQVTyataNbM5yN0BO__Nvj6WO2gOdACwERuo54N3U=s128-c0x00000000-cc-rp-mo	Excellent services provided by the team of DevSpectra. Website is user friendly, design is clean and easy to use. They delivered very fast and have a good team.I recommened to use it	8 months ago	2025-11-20 17:33:28.914	en	https://www.google.com/maps/contrib/116163937319383934693/reviews	f	2026-08-10 14:18:53.996379	2026-08-10 15:06:55.702999	5
fc6c0b32-3fe0-48fb-af63-137517026e6f	places/ChIJr4vQRX9hUjoR987-7Vu4DZg/reviews/Ci9DQUlRQUNvZENodHljRjlvT214b2QyRlZSV0ZRYWxKcE9YTlhUMDlxTFdjMFlXYxAB	GOD AJENDRA AJENDRA	https://lh3.googleusercontent.com/a/ACg8ocJd1RckYujjSYST-WqtRbQ7KnyWfzEMNb-Vy4CQLRtSyBv-dg=s128-c0x00000000-cc-rp-mo	https://lh3.googleusercontent.com/a/ACg8ocJd1RckYujjSYST-WqtRbQ7KnyWfzEMNb-Vy4CQLRtSyBv-dg=s128-c0x00000000-cc-rp-mo	Very excellent service, nice speech\nThank you\nThank you very much 🙏	2 months ago	2026-05-20 10:49:02.063	en	https://www.google.com/maps/contrib/100929824273194834850/reviews	t	2026-08-10 14:18:53.986099	2026-08-10 15:06:36.032256	5
ed461946-5d85-49a3-bdd7-b4603cd558a2	places/ChIJr4vQRX9hUjoR987-7Vu4DZg/reviews/Ci9DQUlRQUNvZENodHljRjlvT21wWlptdEhVbWhYWVZZMFRsTnBZMWRLVURkT2QzYxAB	Vedarajan “Sekar” Sekar	https://lh3.googleusercontent.com/a-/ALV-UjXc75i6W1DbIK-6IhUxDqORDWWQP_dgSf4L8ykbUcCeRrN1c8ucnQ=s128-c0x00000000-cc-rp-mo-ba2	https://lh3.googleusercontent.com/a-/ALV-UjXc75i6W1DbIK-6IhUxDqORDWWQP_dgSf4L8ykbUcCeRrN1c8ucnQ=s128-c0x00000000-cc-rp-mo-ba2	I Really Appreciate their Commitment towards their core in perfection in completing the project, We personally had a great time in sharing our knowledge to attain the Success in Developing the portal.....Thank you Team of Dev Spectra	7 months ago	2025-12-28 21:44:17.162	en	https://www.google.com/maps/contrib/102342395114641862238/reviews	f	2026-08-10 14:18:53.900964	2026-08-10 15:06:50.219004	5
beddb83c-008e-424c-b73d-35cb0aa28311	places/ChIJr4vQRX9hUjoR987-7Vu4DZg/reviews/Ci9DQUlRQUNvZENodHljRjlvT210VGEzaDNRVTlSVTB0elJ5MUhhbFF0VjBFM2JWRRAB	deepika raj	https://lh3.googleusercontent.com/a/ACg8ocJfoCJbQN--lSS8SNP3nvnReyFa2Te2qNURliMTqJjY5Zt65Pc=s128-c0x00000000-cc-rp-mo	https://lh3.googleusercontent.com/a/ACg8ocJfoCJbQN--lSS8SNP3nvnReyFa2Te2qNURliMTqJjY5Zt65Pc=s128-c0x00000000-cc-rp-mo	Dev spectra :\nI had a great experience working with this website design team. They understood my requirements clearly and turned my ideas into a clean, modern, and user-friendly website. The layout, colours, and overall look were very professional. I kept on changing my requirement of the product design but they never hesitated with full friendly comfort they worked and delivered me with full satisfaction	8 months ago	2025-12-10 09:03:33.237	en	https://www.google.com/maps/contrib/109367060534383020238/reviews	f	2026-08-10 14:18:53.976966	2026-08-10 15:06:52.429187	5
\.


--
-- TOC entry 5093 (class 0 OID 52900)
-- Dependencies: 221
-- Data for Name: migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.migrations (id, "timestamp", name) FROM stdin;
1	1785582782959	InitialDashboard1785582782959
2	1786000306466	Init1786000306466
3	1786002048643	GoogleReviews1786002048643
\.


--
-- TOC entry 5099 (class 0 OID 53312)
-- Dependencies: 227
-- Data for Name: projects; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.projects (id, title, slug, description, "shortDescription", category, technologies, "githubUrl", "liveUrl", thumbnail, images, featured, "displayOrder", status, "createdAt", "updatedAt") FROM stdin;
\.


--
-- TOC entry 5100 (class 0 OID 53338)
-- Dependencies: 228
-- Data for Name: reviews; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.reviews (id, "googleReviewId", "reviewerName", "reviewerPhoto", rating, "reviewText", "reviewDate", "isVerified", source, "profileUrl", "isFeatured", "isPublished", "displayOrder", "createdAt", "updatedAt") FROM stdin;
\.


--
-- TOC entry 5096 (class 0 OID 53119)
-- Dependencies: 224
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, name, email, password, role, is_active, last_login, created_at, updated_at) FROM stdin;
28af9ed3-78db-4f6b-8594-30b247bb413d	Super Admin	admin@devspectra.com	$2b$10$agR3pIpKv0Qa1yXYP3ili.UOXygwgiZeRsz1W98U9yiaCq./0vKmO	SUPER_ADMIN	t	\N	2026-08-06 11:48:28.140176	2026-08-06 11:48:28.140176
5fe2232d-9c12-4efc-900d-7535ae7bc96a	Super Admin	admin@portfolio.com	$2b$10$ybibG4T7su6sHIXeotlXNeRLEmaYz42ZcZ1G8QgDgFBLEE0GZvcEa	SUPER_ADMIN	t	\N	2026-08-06 12:19:30.753629	2026-08-06 12:19:30.753629
\.


--
-- TOC entry 5109 (class 0 OID 0)
-- Dependencies: 222
-- Name: dashboard_metrics_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.dashboard_metrics_id_seq', 1, true);


--
-- TOC entry 5110 (class 0 OID 0)
-- Dependencies: 220
-- Name: migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.migrations_id_seq', 3, true);


--
-- TOC entry 4944 (class 2606 OID 53363)
-- Name: reviews PK_231ae565c273ee700b283f15c1d; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reviews
    ADD CONSTRAINT "PK_231ae565c273ee700b283f15c1d" PRIMARY KEY (id);


--
-- TOC entry 4940 (class 2606 OID 53335)
-- Name: projects PK_6271df0a7aed1d6c0691ce6ac50; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.projects
    ADD CONSTRAINT "PK_6271df0a7aed1d6c0691ce6ac50" PRIMARY KEY (id);


--
-- TOC entry 4926 (class 2606 OID 52910)
-- Name: migrations PK_8c82d7f526340ab734260ea46be; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.migrations
    ADD CONSTRAINT "PK_8c82d7f526340ab734260ea46be" PRIMARY KEY (id);


--
-- TOC entry 4928 (class 2606 OID 52928)
-- Name: dashboard_metrics PK_a200fe0709a8e721c1630f80bf5; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.dashboard_metrics
    ADD CONSTRAINT "PK_a200fe0709a8e721c1630f80bf5" PRIMARY KEY (id);


--
-- TOC entry 4938 (class 2606 OID 53311)
-- Name: contacts PK_b99cd40cfd66a99f1571f4f72e6; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contacts
    ADD CONSTRAINT "PK_b99cd40cfd66a99f1571f4f72e6" PRIMARY KEY (id);


--
-- TOC entry 4934 (class 2606 OID 53379)
-- Name: google_reviews UQ_39e61966943680df60c2181a934; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.google_reviews
    ADD CONSTRAINT "UQ_39e61966943680df60c2181a934" UNIQUE ("googleReviewId");


--
-- TOC entry 4942 (class 2606 OID 53337)
-- Name: projects UQ_96e045ab8b0271e5f5a91eae1ee; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.projects
    ADD CONSTRAINT "UQ_96e045ab8b0271e5f5a91eae1ee" UNIQUE (slug);


--
-- TOC entry 4936 (class 2606 OID 53172)
-- Name: google_reviews google_reviews_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.google_reviews
    ADD CONSTRAINT google_reviews_pkey PRIMARY KEY (id);


--
-- TOC entry 4930 (class 2606 OID 53140)
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- TOC entry 4932 (class 2606 OID 53138)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


-- Completed on 2026-08-12 13:13:08

--
-- PostgreSQL database dump complete
--

\unrestrict noaJXT1Z7EMWHierDD3cg7N0BQ47pV2CHFafdfU43c6XVapflb05Fc4THHVov03

