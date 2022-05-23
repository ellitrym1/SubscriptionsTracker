const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    if (req.cookies.user) {
        res.redirect("/subscriptions");
    }

    res.render("home");
});

module.exports = router;
