const express = require('express')
const connectDb = require("./config/db");
const productRoutes = require("./routes/productRoutes.js");

const app = express()
const port = 3000

app.use(express.json());

connectDb();

app.use("/shopApi/V1", productRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
