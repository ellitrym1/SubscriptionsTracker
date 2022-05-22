const express = require("express");
const router = express.Router();

const User = require("../models/user");

router.get("/", (req, res) => {
    res.render("signup");
});

router.post("/", (req, res) => {
    const User = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        subscriptions: [],
    };

    User.save((err) => {
        if (err) {
            res.redirect("/signup");
        } else {
            res.render("subscriptions");
        }
    });
});

module.exports = router;
