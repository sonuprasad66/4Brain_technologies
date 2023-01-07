const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config();
const cors = require("cors");
app.use(cors());
const { connection } = require("./Config/db");
const { userRouter } = require("./Routes/User.route");

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.use("/", userRouter);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Database connection successfull");
  } catch (err) {
    console.log("Error to connect mongo database");
    console.log(err);
  }
  console.log(`App listening on port ${process.env.PORT}`);
});
