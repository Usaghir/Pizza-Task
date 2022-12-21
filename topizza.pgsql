--
-- PostgreSQL database dump
--

-- Dumped from database version 12.13
-- Dumped by pg_dump version 14.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: topizza; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE topizza WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.UTF-8';


ALTER DATABASE topizza OWNER TO postgres;

\connect topizza

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: orders; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.orders (
    order_id integer NOT NULL,
    first_name character varying(20),
    last_name character varying(20),
    email character varying(50),
    phone character varying(20),
    address character varying(50),
    city character varying(20),
    post_code character varying(20),
    other_info character varying(50),
    total_price numeric(10,2),
    total_qty integer,
    order_date character varying(50)
);


ALTER TABLE public.orders OWNER TO postgres;

--
-- Name: orders_order_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.orders_order_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.orders_order_id_seq OWNER TO postgres;

--
-- Name: orders_order_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.orders_order_id_seq OWNED BY public.orders.order_id;


--
-- Name: pizza; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pizza (
    pizza_id integer NOT NULL,
    pizza_name character varying(20),
    pizza_price numeric(10,2),
    pizza_image character varying(255),
    pizza_description character varying(255),
    pizza_quantity integer,
    order_id integer
);


ALTER TABLE public.pizza OWNER TO postgres;

--
-- Name: pizza_pizza_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.pizza_pizza_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.pizza_pizza_id_seq OWNER TO postgres;

--
-- Name: pizza_pizza_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.pizza_pizza_id_seq OWNED BY public.pizza.pizza_id;


--
-- Name: orders order_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders ALTER COLUMN order_id SET DEFAULT nextval('public.orders_order_id_seq'::regclass);


--
-- Name: pizza pizza_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pizza ALTER COLUMN pizza_id SET DEFAULT nextval('public.pizza_pizza_id_seq'::regclass);


--
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.orders (order_id, first_name, last_name, email, phone, address, city, post_code, other_info, total_price, total_qty, order_date) FROM stdin;
17	Raja	Saghir	umer.saghir@live.com	0767464646	Gånglåtsvägen 45 lgh 1201	Malmö	21578		20.00	1	2020-7-14
18	Raja	Saghir	umer.saghir@live.com	0767464646	Gånglåtsvägen 45 lgh 1201	Malmö	21578		40.00	2	2020-7-14
19	Sajjad	Safdar	safdar@live.com	767464646	Gånglåtsvägen 45 lgh 1201	Malmö	21578		40.00	4	2020-7-14
20	Raja	Saghir	umer.saghir@live.com	0767464646	Gånglåtsvägen 45 lgh 1201	Malmö	21578		130.00	6	2020-7-14
21	Raja	Saghir	umer.saghir@live.com	0767464646	Gånglåtsvägen 45 lgh 1201	Malmö	21578		155.00	8	2020-8-27
22	Raja	Saghir	u@live.com	0767464646	Gånglåtsvägen 45 lgh 1201	Malmö	21578	sadsdsdsa	10.00	1	2020-8-27
23	Raja	Saghir	umer.saghir@live.com	0767464646	Gånglåtsvägen 45 lgh 1201	Malmö	21578		20.00	1	2020-8-27
24	Raja	Saghir	umer.saghir@live.com	0767464646	Gånglåtsvägen 45 lgh 1201	Malmö	21578		10.00	1	2020-8-27
25	Raja	Saghir	umer.saghir@live.com	0767464646	Gånglåtsvägen 45 lgh 1201	Malmö	21578		15.00	1	2020-8-27
26	Raja	Saghir	lib@live.com	0767464646	Gånglåtsvägen 45 lgh 1201	Malmö	21578		100.00	10	2020-8-27
27	Raja umer	Saghir	umer.saghir@live.com	767464646	Gånglåtsvägen 45 lgh 1201	Malmö	21578		20.00	1	2020-8-27
28	Raja	Saghir	umer.saghir@live.com	0767464646	Gånglåtsvägen 45 lgh 1201	Malmo	21578		15.00	1	2020-9-12
29	Raja Umer	Saghir	umer.saghir@live.commmmm	+46767464646	Lyckesholmsgatan 45	Malmo	21374		60.00	4	2022-12-21
\.


--
-- Data for Name: pizza; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pizza (pizza_id, pizza_name, pizza_price, pizza_image, pizza_description, pizza_quantity, order_id) FROM stdin;
36	Maxicon Pizza	20.00	/static/media/Maxicon.ebf093b8.jpeg	Garlic, tomato sauce, mozzarella, chicken and jalapeños.	1	17
37	Mini Pizza	10.00	/static/media/Mini.800e8253.jpeg	Mozzarella, pepperoni, beef, mushrooms, peppers.	1	18
38	Shrimps Pizza	30.00	/static/media/Shrimps.986cf4fc.jpeg	Garlic seasoned tomato, mozzarella, basil and shrimp.	1	18
39	Mini Pizza	10.00	/static/media/Mini.800e8253.jpeg	Mozzarella, pepperoni, beef, mushrooms, peppers.	4	19
40	Pepperoni Pizza	20.00	/static/media/Pepperoni.ab80d1fa.jpeg	Mozzarella, pepperoni, olives, cocktail tomatoes and bell pepper .	1	20
41	Maxicon Pizza	20.00	/static/media/Maxicon.ebf093b8.jpeg	Garlic, tomato sauce, mozzarella, chicken and jalapeños.	1	20
42	Spanish Pizza	20.00	/static/media/Spanish.9f905d3a.jpeg	Tomato sauce, mozzarella, cocktail tomatoes, basil.	1	20
43	Shrimps Pizza	30.00	/static/media/Shrimps.986cf4fc.jpeg	Garlic seasoned tomato, mozzarella, basil and shrimp.	1	20
44	Vegetable Pizza	15.00	/static/media/Vegetable.00ec9234.jpeg	Tomato sauce, mozzarella, anion and bolognese sauce.	1	20
45	Italian Pizza	25.00	/static/media/Italian.eba31d58.jpeg	BBQ sauce, mozzarella, red onion, pepper and beef.	1	20
46	Shrimps Pizza	30.00	/static/media/Shrimps.986cf4fc.jpeg	Garlic seasoned tomato, mozzarella, basil and shrimp.	1	21
48	Vegetable Pizza	15.00	/static/media/Vegetable.00ec9234.jpeg	Tomato sauce, mozzarella, anion and bolognese sauce.	1	21
47	Spanish Pizza	20.00	/static/media/Spanish.9f905d3a.jpeg	Tomato sauce, mozzarella, cocktail tomatoes, basil.	1	21
49	Pepperoni Pizza	20.00	/static/media/Pepperoni.ab80d1fa.jpeg	Mozzarella, pepperoni, olives, cocktail tomatoes and pepper.	1	21
50	Maxicon Pizza	20.00	/static/media/Maxicon.ebf093b8.jpeg	Garlic, tomato sauce, mozzarella, chicken and jalapeños.	1	21
51	Mini Pizza	10.00	/static/media/Mini.800e8253.jpeg	Mozzarella, pepperoni, beef, mushrooms, peppers.	1	21
52	Kebab Pizza	15.00	/static/media/Kebab.84387a95.jpeg	Mozzarella, kebab meat, jalapeños, bell pepper and red onion.	1	21
53	Italian Pizza	25.00	/static/media/Italian.eba31d58.jpeg	BBQ sauce, mozzarella, red onion, pepper and beef.	1	21
54	Mini Pizza	10.00	/static/media/Mini.800e8253.jpeg	Mozzarella, pepperoni, beef, mushrooms, peppers.	1	22
55	Maxicon Pizza	20.00	/static/media/Maxicon.ebf093b8.jpeg	Garlic, tomato sauce, mozzarella, chicken and jalapeños.	1	23
56	Mini Pizza	10.00	/static/media/Mini.800e8253.jpeg	Mozzarella, pepperoni, beef, mushrooms, peppers.	1	24
57	Kebab Pizza	15.00	/static/media/Kebab.84387a95.jpeg	Mozzarella, kebab meat, jalapeños, bell pepper and red onion.	1	25
58	Mini Pizza	10.00	/static/media/Mini.800e8253.jpeg	Mozzarella, pepperoni, beef, mushrooms, peppers.	10	26
59	Spanish Pizza	20.00	/static/media/Spanish.9f905d3a.jpeg	Tomato sauce, mozzarella, cocktail tomatoes, basil.	1	27
60	Kebab Pizza	15.00	/static/media/Kebab.84387a95.jpeg	Mozzarella, kebab meat, jalapeños, bell pepper and red onion	1	28
61	Kebab Pizza	15.00	/static/media/Kebab.83b3d0259d18cf21045d.jpeg	Mozzarella, kebab meat, jalapeños, bell pepper and red onion	7	29
\.


--
-- Name: orders_order_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.orders_order_id_seq', 29, true);


--
-- Name: pizza_pizza_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.pizza_pizza_id_seq', 61, true);


--
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (order_id);


--
-- Name: pizza pizza_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pizza
    ADD CONSTRAINT pizza_pkey PRIMARY KEY (pizza_id);


--
-- Name: pizza pizza_order_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pizza
    ADD CONSTRAINT pizza_order_id_fkey FOREIGN KEY (order_id) REFERENCES public.orders(order_id);


--
-- PostgreSQL database dump complete
--

