const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const User = require("../models/user");

router.get("/", (req, res) => {
    res.render("signin");
});

router.post("/", (req, res) => {});

module.exports = router;
