const express = require("express");

const {
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    getProductById,
} = require("../controllers/productcontroller");
const router = express.Router();

router.get("/getAllProducts", getAllProducts)
router.post("/createProduct", createProduct)
router.patch("/updateProduct/:id", updateProduct)
router.delete("/deleteProduct/:id", deleteProduct)
router.get("/getProductById/:id", getProductById)

module.exports = router; // not a named default we can imoprt it by any name