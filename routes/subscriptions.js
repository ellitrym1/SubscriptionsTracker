const express = require("express");
const { route } = require("./home");
const router = express.Router();

const User = require("../models/user");

router.get("/", (req, res) => {
    const userID = req.cookies.user;
    if (userID) {
        res.redirect(`/subscriptions/${userID}/view`);
    } else {
        res.send("NOT LOGGED IN");
    }
});

router.get("/add", (req, res) => {});

router.post("/add", (req, res) => {});

router.get("/:userID/view", (req, res) => {
    const userID = req.params.userID;
    if (userID !== req.cookies.user) {
        res.send("NOT LOGGED IN");
    }

    let subscriptions = [];

    User.findOne({ _id: userID }, (err, user) => {
        subscriptions = user.subscriptions;
    });

    console.log(subscriptions);
    res.render("subscriptions", { subscriptions: subscriptions });
});

router.get("/edit", (req, res) => {});

router.post("/edit", (req, res) => {});

router.get("/delete", (req, res) => {});

router.post("/delete", (req, res) => {});

module.exports = router;
