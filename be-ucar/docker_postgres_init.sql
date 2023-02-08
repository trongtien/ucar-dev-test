PGDMP     5                    {            dev_test    15.1    15.1                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            	           1262    16398    dev_test    DATABASE     �   CREATE DATABASE dev_test WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';
    DROP DATABASE dev_test;
                postgres    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
                pg_database_owner    false            
           0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                   pg_database_owner    false    4            �            1259    16399 
   card_brand    TABLE     �  CREATE TABLE public.card_brand (
    id integer NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at time with time zone NOT NULL,
    deleted_at time with time zone,
    created_by character varying,
    updated_by character(1),
    deleted_by character(1),
    name character varying NOT NULL,
    logo character varying,
    description character varying(1),
    status integer DEFAULT 1 NOT NULL,
    is_delete boolean NOT NULL,
    total_card_model integer DEFAULT 0 NOT NULL
);
    DROP TABLE public.card_brand;
       public         heap    postgres    false    4            �            1259    16402    card_brand_id_seq    SEQUENCE     �   CREATE SEQUENCE public.card_brand_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.card_brand_id_seq;
       public          postgres    false    4    214                       0    0    card_brand_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.card_brand_id_seq OWNED BY public.card_brand.id;
          public          postgres    false    215            �            1259    16425 
   card_model    TABLE     �  CREATE TABLE public.card_model (
    id integer NOT NULL,
    created_at time with time zone NOT NULL,
    updated_at time with time zone,
    deleted_at time with time zone,
    created_by character varying,
    updated_by character varying,
    deleted_by character varying,
    name character varying NOT NULL,
    avatar character varying,
    description character varying,
    card_brand_id integer NOT NULL,
    status integer,
    is_delete boolean NOT NULL
);
    DROP TABLE public.card_model;
       public         heap    postgres    false    4            �            1259    16428    card_model_id_seq    SEQUENCE     �   CREATE SEQUENCE public.card_model_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.card_model_id_seq;
       public          postgres    false    216    4                       0    0    card_model_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.card_model_id_seq OWNED BY public.card_model.id;
          public          postgres    false    217            j           2604    16403    card_brand id    DEFAULT     n   ALTER TABLE ONLY public.card_brand ALTER COLUMN id SET DEFAULT nextval('public.card_brand_id_seq'::regclass);
 <   ALTER TABLE public.card_brand ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    214            m           2604    16429    card_model id    DEFAULT     n   ALTER TABLE ONLY public.card_model ALTER COLUMN id SET DEFAULT nextval('public.card_model_id_seq'::regclass);
 <   ALTER TABLE public.card_model ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    217    216                       0    16399 
   card_brand 
   TABLE DATA           �   COPY public.card_brand (id, created_at, updated_at, deleted_at, created_by, updated_by, deleted_by, name, logo, description, status, is_delete, total_card_model) FROM stdin;
    public          postgres    false    214   O                 0    16425 
   card_model 
   TABLE DATA           �   COPY public.card_model (id, created_at, updated_at, deleted_at, created_by, updated_by, deleted_by, name, avatar, description, card_brand_id, status, is_delete) FROM stdin;
    public          postgres    false    216   �                  0    0    card_brand_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.card_brand_id_seq', 7, true);
          public          postgres    false    215                       0    0    card_model_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.card_model_id_seq', 4, true);
          public          postgres    false    217            o           2606    16438    card_brand card_brand_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.card_brand
    ADD CONSTRAINT card_brand_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.card_brand DROP CONSTRAINT card_brand_pkey;
       public            postgres    false    214            q           2606    16436    card_model card_model_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.card_model
    ADD CONSTRAINT card_model_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.card_model DROP CONSTRAINT card_model_pkey;
       public            postgres    false    216                B   x�3�4202�50�50S04�25�22ѳ02705�60�$N�(?��3��BR�aLC�4N�=... +�         �   x���K
�0��)��lٺCs�,ۮ
�����I���y<PraGa��&�?ѻ��������i�l;� -$�
jʧ��zjm���Ģzhz�祖AW��(bns,�	���]��>��|��s6�Z�@�� P�     