# Product Inventory Backend

This project is a backend CRUD application built as part of the **SESD Workshop** activity. It demonstrates the use of **Object-Oriented Programming (OOP)** concepts in a **Node.js + TypeScript** backend with proper project structure.

---

## Features

* Create, read (single & list), update, and delete products
* Search products by name or category
* Pagination support
* Input validation and clean error handling
* MongoDB Atlas integration

---

## Tech Stack

* Node.js
* Express.js
* TypeScript
* MongoDB Atlas
* Mongoose

---

## Project Structure

```
src/
│── app.ts
│── server.ts
│── config/db.ts
│── controllers/
│── services/
│── repositories/
│── models/
│── routes/
```

---

## Environment Variables

Create a `.env` file in the root directory:

```
PORT=3000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/productDB
```

---

## Running the Project

```bash
npm install
npm run dev
```

Server runs on `http://localhost:3000`.

---

## API Overview

* `POST /api/products` – Create product
* `GET /api/products` – Get all products (search & pagination)
* `GET /api/products/:id` – Get product by ID
* `PUT /api/products/:id` – Update product
* `DELETE /api/products/:id` – Delete product

---

## OOP Design

* Controllers handle HTTP requests
* Services contain business logic
* Repositories handle database operations

---

## Author

Soham Saranga
