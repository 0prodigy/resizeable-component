const {
  addContent,
  getContent,
  updateContent,
} = require("../controllers/contentController");
const { textValidation } = require("../validation/contentValidation");
const router = require("express").Router();

router.get("/", getContent);
router.post("/add", textValidation, addContent);
router.post("/update", textValidation, updateContent);

module.exports = router;
