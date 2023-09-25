const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PurchaseDigitalGoldSchema = new Schema(
  {
    OrderID: {
      type: String,
    },
    Quantity: {
        type: String,
      },
    Price: {
        type: String,
      },
    Tax: {
        type: String,
      },
    CustomerID: {
        type: String,
      },
    Region: {
        type: String,
      },  
},
);
module.exports = mongoose.model("purchasedigitalgold", PurchaseDigitalGoldSchema);