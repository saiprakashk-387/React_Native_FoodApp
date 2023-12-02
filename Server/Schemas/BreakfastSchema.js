const mongoose = require("mongoose");

const breakFast = mongoose.Schema({
  foodname: {
    type: String,
    require: true,
  },
  foodtype: {
    type: String,
    require: true,
  },
  availabledate: {
    type: String,
    require: true,
  },
  foodprice: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("breakFast", breakFast);
