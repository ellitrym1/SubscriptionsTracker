const express = require("express");
const session = require("express-session");
const path = require("path");
const mysql = require("mysql");

const app = express();

app.listen(process.env.PORT || 3000, (err) => {
    if (!err) {
        console.log("Server started");
    }
});
