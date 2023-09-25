const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PurchaseGoldCoinSchema = new Schema(
  {
    OrderID: {
      type: String,
    },
    Quantity: {
        type: String,
      },
    Category: {
        type: String,
      },
    Amount: {
        type: String,
      },
    Tax: {
        type: String,
      },
    CustomerID: {
        type: String,
      }, 
    ProductID: {
        type: String,
      }, 
},
);
module.exports = mongoose.model("purchasegoldcoin", PurchaseGoldCoinSchema);