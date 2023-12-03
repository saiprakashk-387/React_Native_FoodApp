const express = require("express");
const router = express.Router();
const breakFast = require("../Schemas/BreakfastSchema");

router.post("/food", async (req, res) => {
  try {
    const foodtype = req.body.foodtype;
    const availabledate = req.body.availabledate;
    const getFoodlist = await breakFast.find({ foodtype, availabledate });
    res.status(200).json(getFoodlist);
  } catch (err) {
    res.json({ err: err });
  }
});

module.exports = router;
