const express = require("express");
const router = express.Router();
const breakFast = require("../Schemas/BreakfastSchema");

router.post("/addfooditem", async (req, res) => {
  try {
    const Info = await new breakFast({
      foodname: req.body.foodname,
      foodtype: req.body.foodtype,
      availabledate: req.body.availabledate,
      foodprice: req.body.foodprice,
    });
    const saveInfo = await Info.save();
    res.status(200).json(saveInfo);
  } catch (err) {
    res.status(400).json({ err: err });
  }
});

module.exports = router;
