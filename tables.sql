DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXISTS users (
	id SERIAL,
	email TEXT PRIMARY KEY,
	password TEXT
);

DROP TABLE IF EXISTS product;

CREATE TABLE IF NOT EXISTS product (
	id SERIAL PRIMARY KEY,
	type_of_product TEXT,
	description TEXT,
	price NUMERIC,
	size TEXT,
	color TEXT,
	available INTEGER,
	sold INTEGER,
	img_id INTEGER,
	img_path TEXT,
	date_created TIMESTAMPTZ DEFAULT now(),
	date_trans TIMESTAMPTZ
);


DROP TABLE IF EXISTS user_cart;

CREATE TABLE IF NOT EXISTS user_cart (
	id SERIAL PRIMARY KEY,
	user_email TEXT,
	product_id INTEGER,
	product_num INTEGER
);

DROP TABLE IF EXISTS type_of_product;

CREATE TABLE IF NOT EXISTS type_of_product (
	id SERIAL PRIMARY KEY,
	type TEXT
	);