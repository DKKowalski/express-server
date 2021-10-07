const express = require("express");
const app = express();

const products = [
  {
    id: 1,
    name: "iPhone 14",
    category: "Smart phones",
    currency: "$",
    price: 2000,
    stars: "⭐⭐⭐⭐⭐",
    image: "",
    review: "good product!",
  },
  {
    id: 2,
    name: "Waakye",
    category: "food",
    currency: "$",
    price: 2000,
    stars: "⭐⭐⭐⭐⭐",
    image: "",
    review: "good product!",
  },
];

const customers = [
  {
    id: 1,
    name: "KD Emmanuel",
    gender: "male",
  },
  {
    id: 2,
    name: "Kwabs Asante-Ansah",
    gender: "female",
  },
  {
    id: 3,
    name: "Mark Atta-Mensah",
    gender: "male",
  },
];

app.get("/", (req, res) => {
  res.json({ message: "Hello world" });
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/customers", (req, res) => {
  res.json(customers);
});

app.get("/customers/:customersID", (req, res) => {
  const { customerID } = req.params;
  console.log(`The customer id is ${req.params.customersID}`);
  res.json(customers[customerID - 1]);
});

app.listen(3000, () => {
  console.log("up and running");
});
