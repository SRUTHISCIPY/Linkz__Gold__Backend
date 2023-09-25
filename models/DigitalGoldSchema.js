const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DigitalGoldSchema = new Schema(
  {
    Price: {
      type: String,
    },
    Purity: {
        type: String,
      },
    Region: {
        type: String,
      },  
},
);
module.exports = mongoose.model("digitalgold", DigitalGoldSchema);