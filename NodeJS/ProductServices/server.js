const express = require('express')
const connectDb = require("./config/db");
const ProductModel = require("./models/Product")

const app = express()
const port = 3000

app.use(express.json());

connectDb();
app.get('/', (req, res) => {
  res.send('Hello World!')
})

const createProduct = async (req, res) => {
  const {
    product_name,
    product_price,
    isinStock,
    catagory,
    product_description,
  } = req.body;
  try {
    const product = await ProductModel.create({
      product_name,
      product_price,
      isinStock,
      catagory, 
      product_description,
    });
    res.status(200).json({message: "Product Created"})
  } catch (error) {
    res.status(400).json({message: "Something went Wrong"})
  }
}
app.post("/createProduct", createProduct);

const getAllProducts = async(req, res) => {
  try{
    const products = await ProductModel.find();
    res.json(products);
  } catch(error ){
    res.status(400).json({message: "Sonething WEnt Wrong"});
  }
}

app.get("/getAllProducts", getAllProducts)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
