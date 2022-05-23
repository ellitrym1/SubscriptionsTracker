const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

mongoose
    .connect(`mongodb://localhost:27017/subscriptionsDB`, {
        useNewUrlParser: true,
        family: 4,
    })
    .then((db) => console.log("DB is connected"))
    .catch((err) => console.log(err));

const User = require("../models/user");

router.get("/", (req, res) => {
    res.render("signup");
});

router.post("/", (req, res) => {
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        subscriptions: [],
    });

    user.save((err) => {
        if (err) {
            console.log(err);
            alert("FAILED");
            res.redirect("/signup");
        } else {
            const currentUser = User.findOne(
                { username: req.body.username },
                (err, user) => {
                    req.session.currentUser = user;
                    res.cookie("user", user._id.valueOf());
                    res.redirect(`/subscriptions`);
                }
            );
        }
    });
});

module.exports = router;
