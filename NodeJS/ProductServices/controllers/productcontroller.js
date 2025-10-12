const ProductModel = require("./models/Product")
const getAllProducts = async(req, res) => {
  try{
    const products = await ProductModel.find();
    res.json(products);
  } catch(error ){
    res.status(400).json({message: "Sonething WEnt Wrong"});
  }
}

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

module.exports = {
    createProduct,
    getAllProducts,
}