const router = require("express").Router();
const {
  root: rootController,
  notFound: notFoundController
} = require("./controllers");

router.get("*/:domain", rootController);
router.get("/*", notFoundController);

module.exports = router;
