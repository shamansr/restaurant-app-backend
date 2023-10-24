const express = require("express");
require("dotenv").config();
const routes = require("./src/routes/userRoute");
const app = express();
const db = require("./src/models/db");
const router = require("./src/routes/userRoute");
const cors = require("cors");

app.get("/", (req, res) => {
  res.send("Hello");
});

const corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));

app.use(express.json());
app.use("/v1/api/", routes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on ${process.env.PORT}`);
});
