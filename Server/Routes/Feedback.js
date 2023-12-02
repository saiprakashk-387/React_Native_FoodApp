const express = require("express");
const router = express.Router();
const feedback = require("../Schemas/FeedbackSchema");

router.post("/feedback", async (req, res) => {
  try {
    const Info = await new feedback({
      area: req.body.area,
      building: req.body.building,
      category: req.body.category,
      request: req.body.request,
      description: req.body.description,
      fileurl: req.body.fileurl,
    });
    const saveInfo = await Info.save();
    res.status(200).json(saveInfo);
  } catch (err) {
    res.status(400).json({ err: err });
  }
});

module.exports = router;
