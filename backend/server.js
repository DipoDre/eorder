const express = require("express");
require("dotenv").config();
// const sequelize = require("./database/connection");
// const products = require("./data/products");
const cors = require("cors");
const db = require("./models");

db.sequelize.sync();

const ordersRoutes = require("./routes/orders.routes");

const app = express();

// app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// db.sequelize.sync();

app.use("/orders", ordersRoutes);

app.get("/", (req, res) => {
  res.json({ message: "API is running...Welcome to E-Order" });
});

// app.get("/api/products", (req, res) => {
//   res.json(products);
// });

// app.get("/api/products/:id", (req, res) => {
//   const product = products.find((p) => p._id === req.params.id);
//   res.json(product);
// });

const PORT = process.env.PORT || 8080;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
