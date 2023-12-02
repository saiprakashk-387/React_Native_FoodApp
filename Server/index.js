require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 2000;
const url = process.env.CONNECTION_URL;

app.use(require("./Routes/AddFood"));
app.use(require("./Routes/Feedback"));
app.use(require("./Routes/GetFood"));
app.use(require("./Routes/PrebookFood"));

app.listen(port, () => {
  console.log(`server started on ${port}`);
});

app.get("/", (req, res) => {
  res.json("Express.Js");
});

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", (err) => {
  if (err) {
    console.log("error");
  } else {
    console.log("mongoose connected successfully");
  }
});
