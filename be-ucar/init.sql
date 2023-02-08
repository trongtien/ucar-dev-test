CREATE TABLE IF NOT EXISTS public.card_brand
(
    id integer NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at time with time zone NOT NULL,
    deleted_at time with time zone,
    created_by character varying COLLATE pg_catalog."default",
    updated_by character(1) COLLATE pg_catalog."default",
    deleted_by character(1) COLLATE pg_catalog."default",
    name character varying COLLATE pg_catalog."default" NOT NULL,
    logo character varying COLLATE pg_catalog."default",
    description character varying(1) COLLATE pg_catalog."default",
    status integer NOT NULL DEFAULT 1,
    is_delete boolean NOT NULL,
    total_card_model integer NOT NULL DEFAULT 0,
    CONSTRAINT card_brand_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.card_brand
    OWNER to postgres;

DROP TABLE IF EXISTS public.card_model;

CREATE TABLE IF NOT EXISTS public.card_model
(
    id integer NOT NULL,
    created_at time with time zone NOT NULL,
    updated_at time with time zone,
    deleted_at time with time zone,
    created_by character varying COLLATE pg_catalog."default",
    updated_by character varying COLLATE pg_catalog."default",
    deleted_by character varying COLLATE pg_catalog."default",
    name character varying COLLATE pg_catalog."default" NOT NULL,
    avatar character varying COLLATE pg_catalog."default",
    description character varying COLLATE pg_catalog."default",
    card_brand_id integer NOT NULL,
    status integer,
    is_delete boolean NOT NULL,
    CONSTRAINT card_model_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.card_model
    OWNER to postgres;