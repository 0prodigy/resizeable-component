const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const contentRouter = require("./routes/content");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extends: false }));

app.use("/", contentRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is up and running on  http://locahost:${port}/`);
});
