const router = require("express").Router();
const { root: rootController } = require("./controllers");

router.get("*/:domain", rootController);

module.exports = router;
