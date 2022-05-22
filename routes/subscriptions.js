const express = require("express");
const { route } = require("./home");
const router = express.Router();

const User = require("../models/user");

router.get("/:userID", (req, res) => {
    const userID = req.params.userID;
    res.redirect(`/subscriptions/${userID}/view`);
});

router.get("/add", (req, res) => {});

router.post("/add", (req, res) => {});

router.get("/:userID/view", (req, res) => {
    const userID = req.params.userID;
    console.log(req.session);
    res.send(userID);
});

router.get("/edit", (req, res) => {});

router.post("/edit", (req, res) => {});

router.get("/delete", (req, res) => {});

router.post("/delete", (req, res) => {});

module.exports = router;
