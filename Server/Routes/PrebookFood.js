const express = require("express");
const router = express.Router();
const prebookfood = require("../Schemas/PrebookSchema");

router.get("/getprebookfood", async (req, res) => {
  try {
    const data = await prebookfood.find({});
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json({ err: err });
  }
});

router.post("/prebookfood", async (req, res) => {
  try {
    const Info = await new prebookfood({
      foodname: req.body.foodname,
      foodtype: req.body.foodtype,
      availabledate: req.body.availabledate,
      foodprice: req.body.foodprice,
      prebook: req.body.foodtype,
    });
    const saveInfo = await Info.save();
    res.status(200).json(saveInfo);
  } catch (err) {
    res.status(400).json({ err: err });
  }
});

router.delete("/deleteprebook/:id", async (req, res) => {
  try {
    const deleteUser = await prebookfood.findByIdAndDelete({
      _id: req.params.id,
    });
    res
      .status(200)
      .json({ message: "user Deleted Succcessfully", data: deleteUser });
  } catch (err) {
    res.status(400).json({ err: "Bad request" });
  }
});

router.put("/changeprebookorder/:id", async (req, res) => {
  try {
    const adminprofile = await prebookfood.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );

    res.status(200).json(adminprofile);
  } catch (err) {
    res.json({ err: err });
  }
});

module.exports = router;
