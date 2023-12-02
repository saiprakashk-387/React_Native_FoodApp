const mongoose = require("mongoose");

const feedback = mongoose.Schema({
  area: {
    type: String,
    require: true,
  },
  building: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  request: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  fileurl: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("feedback", feedback);
