const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    brand: { type: String, required:true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Product = mongoose.model("product",ProductSchema );


module.exports=Product