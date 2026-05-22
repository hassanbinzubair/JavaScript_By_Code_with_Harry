const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log(req.query.name);
  res.sendFile(path.join(__dirname, "./index.html"));

  //   res.send("<h1>Hello Welcome to the Main Page!</h1>");
});
app.get("/about", (req, res) => {
  res.send("Hello We see that you want to Get Information About Us!");
});
app.get("/contact", (req, res) => {
  res.send("Hello We see that you want to Contact Us!");
});

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
