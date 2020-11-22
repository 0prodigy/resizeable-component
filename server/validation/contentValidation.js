const { body } = require("express-validator");

const textValidation = [
  body("text")
    .exists({ checkFalsy: true, checkNull: true })
    .withMessage("Text should be valid string"),
];

module.exports = { textValidation };
