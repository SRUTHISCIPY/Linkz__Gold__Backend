const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    OrnamentName: {
      type: String,
    },
    Type: {
        type: String,
      },
    Weight: {
        type: String,
      },
    Stock: {
        type: String,
      },
    Material: {
        type: String,
      },
    Purity: {
        type: String,
      },
    StoneType: {
        type: String,
      },
    Description: {
        type: String,
      },
    Images: {
        type: String,
      },
    Price: {
        type: String,
      },
    EMI: {
        type: String,
      },
    OfferPrice: {
        type: String,
      },  
},
);
module.exports = mongoose.model("product", ProductSchema);