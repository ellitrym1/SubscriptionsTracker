const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("SIGN IN!");
});

module.exports = router;
