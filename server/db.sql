CREATE DATABASE pizzatask;

CREATE TABLE pizzaorder
(
  pizzaorder_id SERIAL PRIMARY KEY,
  description VARCHAR(20)
);

ALTER TABLE pizzaorder
ADD COLUMN user_con VARCHAR
(20);