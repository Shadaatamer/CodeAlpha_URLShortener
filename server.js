const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const router = require("./routes/urlRoutes");
const app = express();

dotenv.config({ path: "./config.env" });
app.use(express.json());

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server is running on port: ${port} `);
});

mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

app.use("/", router);
