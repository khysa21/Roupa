const express = require("express");

const cors = require("cors");

const app = express();

const eventRouter = require("./routes/routes");

app.use(cors());
app.use(express.json());
app.use(eventRouter);

require("./db/db");

app.listen(3000, () => {
  console.log("Server started");
});
