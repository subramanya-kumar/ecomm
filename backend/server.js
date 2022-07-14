import express from "express";
import data from "./data.js";

const app = express();

app.get("/api/products/:id", (req, res) => {
  const products = data.product.find((x) => x._id === parseInt(req.params.id));
  if (products) {
    res.send(products);
  } else {
    res.status(404).send({ message: "Product not found" });
  }
});

app.get("/api/products", (req, res) => {
  res.send(data.product);
});
app.get("/", (req, res) => {
  res.send("Server is ready");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
