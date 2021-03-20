const express = require("express");
const app = express();
const mongo = require("mongoose");
const SERVER_PORT = 4000;
require('dotenv/config')

app.listen(SERVER_PORT, console.log(`RUNNING @ PORT ${SERVER_PORT}`));

//CONNECT TO DB
mongo.connect(
  "mongodb+srv://AC:<alc123>@ac-cluster.zqmaf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true },
  () => {
    console.log("CONNECTED TO DB");
  }
);

//MiddleWare
app.use("/posts", () => {
  console.log("middleware for posts running");
});

//ROUTES
app.get("/", (req, res) => {
  res.send("HOME PAGE, HERE WE GO!!");
});

app.get("/POsts", (req, res) => {
  res.send("POSTS, AH YEH!");
});

// app.delete('/', (req,res)=>{
//     res.send('HOME PAGE, HERE WE GO!!')
// })
