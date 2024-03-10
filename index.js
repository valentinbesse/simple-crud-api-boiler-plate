const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./Routes/product.route.js");
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});

// Connect to MongoDB
mongoose
  .connect(
    "PLEASE INSERT URL HERE"
  )
  .then(() => {
    console.log("Connected to MongoDB...");
    app.listen(3000, () => {
      console.log("Node API app listening on port 3000!");
    });
  })
  .catch((err) => {
    console.error("Could not connect to MongoDB...", err);
  });
