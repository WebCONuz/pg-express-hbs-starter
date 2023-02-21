const router = require("express").Router();

router.use("/", require("./view.routes"));

module.exports = router;
