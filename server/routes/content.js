const {
  addContent,
  getContent,
  updateContent,
} = require("../controllers/contentController");
const { apiCount } = require("../middlewares/middleware");
const { textValidation } = require("../validation/contentValidation");
const router = require("express").Router();
router.use(apiCount);
router.get("/", getContent);
router.post("/add", textValidation, addContent);
router.post("/update", textValidation, updateContent);

module.exports = router;
