const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const User = require("../models/user");

router.get("/", (req, res) => {
    res.render("signin");
});

router.post("/", (req, res) => {
    User.findOne({ username: req.body.username }, (err, user) => {
        if (user) {
            req.session.currentUser = user;
            res.cookie("user", user._id.valueOf());
            res.redirect(`/subscriptions`);
        }
    });
});

module.exports = router;
