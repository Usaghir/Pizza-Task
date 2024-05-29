# Topizza

## Introduction

Topizza is a demo online pizza store application where users can explore the online pizza shop, choose pizzas, and manage their orders. Users can add pizzas to a shopping cart, adjust orders by adding, subtracting, or removing items, and view the cost breakdown, including total and additional costs. Users can place orders by filling in their details and can view their order history by providing their email address. This allows users to access their invoices for orders placed using that email.

## Requirements

### Completed

1. **Routing Pages:**
   - Home
   - Menu
   - About
   - Contact
   - Order History
   - Cart
   - Order Form
   - Not Found

2. **Home Page:** Contains summary information.
3. **Menu Page:** Displays a selection of pizzas with descriptions.
4. **About Page:** Provides general company information.
5. **Contact Page:** Includes a form for submitting messages to an email address.
6. **Order History Page:** Displays a history of placed orders, including payment receipts or invoices.
7. **Cart Page:** Shows selected items and cost information before placing an order.
8. **Order Form Page:** Contains a form for adding customer details and the cost needed to place orders.
9. **Not Found Page:** Available in case the user enters a wrong URL endpoint.
10. **Cart Management:** Users can add several pizzas to the cart and adjust quantities both inside and outside the cart.
11. **Total Price Calculation:** Displays the total price of each order in euros and dollars.
12. **Final Bill:** Includes delivery and VAT costs.
13. **Responsive Design:** Ensures a good user experience on all devices.

### Pending

1. User login system.
2. Payment gateway integration.
3. More items in the menu.
4. Dynamic home page presentation items.
5. User input validation.
6. Dockerize the whole application.

## Tools and Technologies Used

- Visual Studio Code
- Terminal
- JavaScript
- React
- Bootstrap
- Context API
- Node.js
- Express
- PostgreSQL
- Axios
- Heroku
- NPM
- Git

## Main Parts

Topizza consists of three main parts:

1. **Frontend:** React, Context API
2. **Backend:** Node.js, Express
3. **Database:** PostgreSQL

## Prerequisites

- Install Node.js
- Install NPM
- Install React
- Install CLI
- Install Git
- Install PostgreSQL

## Setup Instructions

It is necessary to set up and start these three components in the order below for everything to work.

### Starting the Database

```bash
$ psql -U postgres
$ \c topizza


### Starting the Backend Server
In the application root folder:

`$ npm install`
`$ node index`

### Starting the Frontend Development Server
In the client folder:

`$ npm install`
`$ npm start`

## Link to the Current Version of the Application

[Topizza](https://topizza-31e90.firebaseapp.com/)
