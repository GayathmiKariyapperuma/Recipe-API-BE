const express = require("express");
const bodyparser = require("body-parser");

const app = express();
app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.send("<h1>This is back end web developement project</h1>");
});

app.get("/about", function (req, res) {
  res.sendfile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  var n1 = Number(req.body.n1);
  var n2 = Number(req.body.n2);
  var ans = n1 + n2;
  res.send("The ans is : " + ans);
});

app.listen(3000, function () {
  console.log("server running on port : 3000");
});
