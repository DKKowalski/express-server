const express = require("express");
const app = express();

app.post("/product", (req, res) => {
  console.log(req.body);
  res.send("data received successfully!!");
});
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
