const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const path = require("path");
const mongoose = require("mongoose");

mongoose.connect(
    mongoose
        .connect(
            `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.abg27.mongodb.net/blogDB`,
            { useNewUrlParser: true }
        )
        .then((db) => console.log("DB is connected"))
        .catch((err) => console.log(err))
);

const app = express();

app.set("view engine", "pug");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

require("./routes/routes")(app);

app.listen(process.env.PORT || 3000, (err) => {
    if (!err) {
        console.log("Server started");
    }
});
