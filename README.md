# Topizza

## Introduction

Topizza is a demo online pizza store application where the user can see some information regarding the online pizza shop and choose the pizzas. User can place pizzas in shopping cart to adjust the order by adding, subtracting or removing the order items and then user can see the cost of each pizza, total and additional cost of pizzas as well. User can place the order by filling the detail. User can see the history of the order by going to my order page when user placed the order need to provide just email address to see the history as invoice if the order is placed using that email.

## Requirements

# Completed

1. -[x] There should be at least some routing pages (Home, Menu, About, Contact, Order History, Cart, Order Form, Not Found).
1. -[x] The Home page should contain summary information.
1. -[x] The Menu page should contain some pizzas to choose with description.
1. -[x] The About page should have some general company information.
1. -[x] The Contact page should contact from for submitting the message to some email.
1. -[x] The Card page should contain history of the places orders like payment receipt or invoices.
1. -[x] The Order History page should have selected items and cost information regarding pizzas before placing order.
1. -[x] The Order Form page should contain form to add the customer detail and cost need to pay to places the orders.
1. [x] Not Found page should be available in case user put wrong end-point in the url.
1. -[x] A client should be able to put several pizzas into cart, and the quantity must be defined both while
   inside the cart and outside the cart.
1. -[x] Total price of each order must be calculated and shown in euros and in dollars.
1. [x] There should be delivery and VAT costs in the final bill.

# Pending

1. -[] Responsive design.
1. -[] User login system.
1. -[] Payment gateway integration.
1. -[] More items in the menu.
1. -[] Dynamic Home page presentation items.
1. -[] User input validation.
1. -[] Dockerize the whole application.

## Tools and technologies used

Visual Studio Code
Terminal
JavaScript
React
Boot Strap
Context API
Node JS
Express
PostgreSQL
Axios
Heroku
NPM
Git

## Main parts

Topizza consists of three main parts:

Frontend (React, Context API)
Backend (Node, Express)
Database (Postgres)

## Prerequisites

Install Nodejs
Install NPM
Install React
Install CLI
Install Git
Install Postgres

It is necessary to set up and start these three components in the order below for everything to work.

Starting the database

`$ psql -U postgres`
`$ \c topizza`

Starting the backend server
In application root folder.

`$ npm install`
`$ nodomon index`

Starting the frontend development server
In client folder

`$ npm install`
`$ npm start`

# Link to the current version of application

[www.topizza.herokuapp.com](https://topizza.herokuapp.com)
