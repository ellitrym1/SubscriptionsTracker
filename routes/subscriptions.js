const express = require("express");
const { route } = require("./home");
const router = express.Router();

const User = require("../models/user");

router.get("/", (req, res) => {
    res.redirect("/subscriptions/view");
});

router.get("/add", (req, res) => {});

router.post("/add", (req, res) => {});

router.get("/view", (req, res) => {
    res.send("SUBSCRIPTIOSN");
});

router.get("/edit", (req, res) => {});

router.post("/edit", (req, res) => {});

router.get("/delete", (req, res) => {});

router.post("/delete", (req, res) => {});

module.exports = router;
