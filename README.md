# Topizza

## Introduction

Topizza is a small online pizza store application where the user can see the pizzas and choose the pizzs and place in shopping cart to adjust the order by adding, subtracting or removing the order items and then see the cost of each pizza, total and additional cost as well. Then user can place the form by filling the detail and after. User can see the history of the order by going to my order page when each use who placed the order need to provide the email to see the history as invoice if the order is places using that email.

## Requirements

1. -[x] The menu page should contain at least 8 pizzas
2. -[x] Login is not required but could be available for checking the history of orders
3. -[x] Your clients should be able to choose pizzas directly from the menu
4. -[x] You can decide 4. what else you want in the menu
5. -[x] Adding a description for each pizza would be a nice decision
6. -[x] Don’t proceed to the payment page. The last action from a client will be filling in the order form (address,
   name, surname, etc.) to get a confirmation that the order has been received
7. -[x] A client should be able to put several pizzas into cart, and the quantity must be defined both while
   outside the cart and in the cart
8. -[x] Total price of each order must be calculated and shown in euros and in dollars
9. [x] Don’t forget to add delivery costs to the final bill

## Technologies used

This full-stack application is based on Spring, PostgreSQL, React, React router and Axios. Check the following links for documentation and guides:

React
Context API
Node JS
Express
PostgreSQL
Axios
Postman
Heroku
Axios
NPM

## Main parts

Topizza consists of three main parts:

Frontend (React, Context API)
Backend (Node, Express)
Database (Postgres)

It is necessary to set up and start these three components in the order above for everything to work.

## Prerequisites

Install Nodejs
Install NPM
Install React
Install CLI
Install Git
Install Postgres

Starting the database

\$ `psql -U postgres $ \c topizza`

Starting the backend server
In application root folder.

````$ npm install
    $ nodomon index```

Starting the frontend development server
In client folder
```$ npm install
   $ npm start```
````
