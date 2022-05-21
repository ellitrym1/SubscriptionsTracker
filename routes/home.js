const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("WELCOME!!! AHORA ESTOY MOTIVADO");
});

module.exports = router;
