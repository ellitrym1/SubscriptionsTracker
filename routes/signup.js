const express = require("express");
const router = express.Router();

router.get("/signup", (req, res) => {
    res.send("SIGN UP!");
});

module.exports = router;
