const mongoose = require ("mongoose");

const productSchema = new mongoose.Schema(
    {
        product_name: {type: String, required: true},
        product_price: {type: String, required: true},
        isinStock: {type: Boolean, required: true},
        catagory: {type: String, required: true},
        product_description: {type: String, required: true},
    },
    {timestamps: true}
);

module.exports = mongoose.model("products", productSchema);