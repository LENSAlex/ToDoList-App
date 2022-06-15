const express = require("express");
require("dotenv").config();

const app = express();

//files
const user = require("./routes/user")

app.use(user);

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});


app.use(express.json());