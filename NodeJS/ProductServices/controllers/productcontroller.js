const ProductModel = require("../models/Product")
const getAllProducts = async(req, res) => {
  try{
    const products = await ProductModel.find();
    res.json(products);
  } catch(error ){
    res.status(400).json({message: "Something went wrong"});
  }
};

const createProduct = async (req, res) => {
  const {
    product_name,
    product_price,
    isInStock,
    category,
    product_description,
  } = req.body;
  try {
    const product = await ProductModel.create({
      product_name,
      product_price,
      isInStock,
      category, 
      product_description,
    });
    res.status(200).json({message: "Product Created"})
  } catch (error) {
    res.status(400).json({message: "Something went Wrong"})
  }
};

const updateProduct = async(req, res) => {
    try{
        const Id = req.params.id;
        const product = await ProductModel.findByIdAndUpdate(Id, req.body);
        if(!product) {
            res.status(404).json({message: "Product not found"})
        }
        const updatedProduct = await ProductModel.findById(Id);
        res.json({message: "Poduct Updated", updatedProduct})
    } catch(error){
        res.status(400).json({message: "Something gone wrong"})
    }
};




const deleteProduct = async(req, res) => {
    try{
        const Id = req.params.Id;
        const product = await ProductModel.findByIdAndDelete(Id);
        if(!product) {
            res.status(400).json({message: "Product not found"})
        }
        req.status(200).json({message: "Product Deleted"})
    } catch(error){
        res.status(400).json({message: "Something gone wrong"})
    }
};

const getProductById = async(req, res) => {
    try{
        const Id = req.params.Id;
        const product = await ProductModel.findById(Id);
        if(!product) {
            res.status(400).json({message: "Product not found"})
        }
        req.json(product)
    } catch(error){
        res.status(400).json({message: "Something gone wrong"})
    }
};

module.exports = {
  createProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
  getProductById,
};