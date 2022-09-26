const express = require("express");

const cors = require("cors");

const app = express();

const session = require('express-session');
const SECRET = process.env.SECRET || 'secretkeyKlaus';

const eventRouter = require("./routes/routes");

const corsConfig = {
  origin: 'http://localhost:3000',
  credentials: true,
};
app.use(cors(corsConfig));
app.use(express.static('./images'));
app.use(express.json());

app.use(
  session({
    name: 'sid',
    saveUninitialized: false,
    resave: false,
    secret: SECRET,
    cookie: {
      maxAge: 1000 * 60 * 60, 
      sameSite: true,
      httpOnly: false,
      secure: false,
    },
  })
);

app.use(eventRouter);

require("./db/db");

const server = app.listen(3005, (err) => {
  if(err) console.log(`Some error happened ${err}`)
  else console.log("Server started at port 3005!");
});

module.exports = server;
