const express = require("express");
const router = express.Router();
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { document } = new JSDOM(`...`).window;

const User = require("../models/user");

router.get("/", (req, res) => {
    const userID = req.cookies.user;
    if (userID) {
        res.redirect(`/subscriptions/${userID}/view`);
    } else {
        res.send("NOT LOGGED IN");
    }
});

router.get("/add", (req, res) => {
    res.render("subscription-add");
});

router.post("/add", async (req, res) => {
    const subscription = {
        name: req.body.name,
        paymentDate: req.body.date,
        paymentFrequency: req.body.frequency,
        amount: req.body.amount,
    };
    console.log(subscription);
    const updatedUser = await User.findOneAndUpdate(
        { _id: req.cookies.user },
        {
            $push: { subscriptions: subscription },
        },
        { new: false }
    );
    console.log(updatedUser);
    res.redirect(`/subscriptions`);
});

router.get("/:userID/view", (req, res) => {
    const userID = req.params.userID;
    if (userID !== req.cookies.user) {
        res.send("NOT LOGGED IN");
    }

    User.findOne({ _id: userID }, (err, user) => {
        res.render("subscriptions", {
            name: user.username,
            subscriptions: user.subscriptions,
        });
    });
});

router.get("/delete/:deleteID", (req, res) => {
    const deleteID = req.params.deleteID;
    console.log(deleteID);

    const name = document.getElementById(`name-${deleteID}`);
    const date = document.querySelector(`.date-${deleteID}`);
    const frequency = document.querySelector(`.frequency-${deleteID}`);
    const amount = document.querySelector(`.amount-${deleteID}`);

    const subscription = {
        name: name,
        paymentDate: date,
        paymentFrequency: frequency,
        amount: amount,
    };
    console.log(subscription);
    res.render("subscription-delete", { subscription: subscription });
});

router.post("/delete", (req, res) => {});

module.exports = router;
