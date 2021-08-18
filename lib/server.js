const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const path = require("path");

var corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));

app.use(express.static(path.join(__dirname, '../dist')));


// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
