const { validationResult } = require("express-validator");
const { default: Content } = require("../models/Content");

const customValidation = validationResult.withDefaults({
  formatter: (err) => {
    return {
      err: true,
      message: err.msg,
    };
  },
});

const addContent = async (req, res) => {
  const errors = customValidation(req);
  if (!errors.isEmpty()) {
    const { err, message } = errors.array({ onlyFirstError: true })[0];
    return res.json({ err, message });
  } else {
    const { text } = req.body;

    try {
      let content = new Content({
        text: text,
      });
      await content.save();
      return res
        .status(200)
        .json({ err: false, message: "Successfully add content" });
    } catch (err) {
      return res
        .status(500)
        .json({ err: true, message: "Something went wrong in add content" });
    }
  }
};

export { addContent };
