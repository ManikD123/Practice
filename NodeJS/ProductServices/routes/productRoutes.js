const express = require("express");

const {
    getAllProducts,
    createProduct,
} = require("../controllers/productcontroller");
const router = express.Router();

router.get("/getAllProducts", getAllProducts)
router.post("/createProduct", createProduct)

module.exports = router; // not a named default we can imoprt it by any name