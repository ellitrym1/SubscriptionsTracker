const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.clearCookie("user");
    console.log(req.cookies);
    res.redirect("/");
});

module.exports = router;
