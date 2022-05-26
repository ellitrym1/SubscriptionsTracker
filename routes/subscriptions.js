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

router.post("/edit", (req, res) => {});

router.get("/delete", (req, res) => {});

router.post("/delete", (req, res) => {
    const subscriptionName = req.body.name;
    User.findOne(
        { _id: req.cookies.user },
        "subscriptions",
        async (err, data) => {
            const updatedUser = await User.findOneAndUpdate(
                { name: req.body.name },
                {
                    subscriptions: data.subscriptions.filter(
                        (subscription) => subscription.name !== subscriptionName
                    ),
                }
            );
            console.log(updatedUser);
        }
    );

    res.redirect("/subscriptions");
});

module.exports = router;
