const { addContent } = require("../controllers/contentController");
const { default: Content } = require("../models/Content");
const { textValidation } = require("../validation/contentValidation");
const router = require("express").Router();

router.get("/add", textValidation, addContent);

export default router;
