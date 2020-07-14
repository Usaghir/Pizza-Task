

CREATE TABLE orders
(
  order_id SERIAL PRIMARY KEY,
  first_name VARCHAR(20),
  last_name VARCHAR(20),
  email VARCHAR(50),
  phone VARCHAR(20),
  address VARCHAR(100),
  city VARCHAR(20),
  post_code VARCHAR(20),
  other_info VARCHAR(100),
  total_price NUMERIC (10, 2),
  total_qty INTEGER,
  order_date VARCHAR(50)
);

CREATE TABLE pizza
(
  pizza_id SERIAL PRIMARY KEY,
  pizza_name VARCHAR(20),
  pizza_price NUMERIC (10, 2),
  pizza_image VARCHAR(255),
  pizza_description VARCHAR(255),
  pizza_quantity INTEGER,
  order_id
    INTEGER REFERENCES orders
  (order_id)
);