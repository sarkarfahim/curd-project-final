const mongoose = require("mongoose");

const SchemaDatabase = mongoose.Schema(
    {
        title: { type: String,  require: true },
        price: {type: Number,  require: true },
        discount: { type: String,  require: true },
        discount_price: { type: Number,  require: true },
    },
    { timestamps: true, versionKey: false }
);

const ProductModel = mongoose.model("products", SchemaDatabase);

module.exports = ProductModel;
