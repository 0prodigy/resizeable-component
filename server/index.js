const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const contentRouter = require("./routes/content");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(
  `mongodb://localhost/content`,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err) => {
    if (err) {
      console.log("Failed to connect database", err);
    } else {
      console.log("Database connected successfully");
    }
  }
);

app.use("/api/content/", contentRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is up and running on  http://locahost:${port}/`);
});
