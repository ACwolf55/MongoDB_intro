const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");
const postsCtrl = require("./Controllers/posts");
const { CONNECTION_STRING, SERVER_PORT, SESSION_SECRET } = process.env;

app.listen(SERVER_PORT, console.log(`RUNNING @ PORT ${SERVER_PORT}`));

//CONNECT TO DB
mongoose.connect(CONNECTION_STRING, { useNewUrlParser: true }, () => {});

mongoose.connection.on("connected", () => {
  console.log("CONNECTED TO DB");
});

//HOME ROUTE
app.get("/", (req, res) => {
  res.send("HOME PAGE, HERE WE GO!!");
  console.log(Date.now);
});

//MiddleWare
app.use(bodyParser.json());
app.use("/posts", postsCtrl);
