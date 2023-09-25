const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PurchaseJewellerySchema = new Schema(
  {
    OrderID: {
      type: String,
    },
    ProductID: {
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
    Quantity: {
        type: String,
      },  
},
);
module.exports = mongoose.model("purchasejewellery", PurchaseJewellerySchema);