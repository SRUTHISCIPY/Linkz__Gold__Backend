const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GoldCoinSchema = new Schema(
  {
    Weight: {
      type: String,
    },
    Purity: {
        type: String,
      },
    Type: {
        type: String,
      },
    Stock: {
        type: String,
      },
    Price: {
        type: String,
      },
    Tax: {
        type: String,
      },  
    OfferPrice: {
        type: String,
      },
},
);
module.exports = mongoose.model("goldcoin", GoldCoinSchema);