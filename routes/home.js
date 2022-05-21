const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("WELCOME!!! AHORA ESTOY MOTIVADO");
});

router.get("/signup", (req, res) => {
    res.send("SIGN UP!");
});

module.exports = router;
