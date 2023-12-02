///third party module
const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 2000;

app.listen(port, () => {
  console.log(`server started on ${port}`);
});

app.get("/", (req, res) => {
  res.json("Express.Js");
});
