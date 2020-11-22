const { body } = require("express-validator");

const textValidation = [
  body("text")
    .exists({ checkFalsy: true, checkNull: true })
    .isString()
    .withMessage("Text should be valid string"),
];

export { textValidation };
