const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const path = require("path");
const mongoose = require("mongoose");
const pug = require("pug");

const app = express();

app.set("views", "./views");
app.set("view engine", "pug");

app.use(cookieParser());
app.use(
    session({
        secret: "secret",
        resave: false,
        saveUninitialized: true,
        cookie: { secure: true, httpOnly: true, maxAge: 1000 * 60 * 60 * 24 },
    })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

require("./routes/routes")(app);

app.listen(process.env.PORT || 3000, (err) => {
    if (!err) {
        console.log("Server started");
    }
});
