const { validationResult } = require("express-validator");
const Content = require("../models/Content");

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
      return res.status(200).json({
        err: false,
        message: "Successfully add content",
        content: content,
      });
    } catch (err) {
      return res
        .status(500)
        .json({ err: true, message: "Something went wrong in add content" });
    }
  }
};

const updateContent = async (req, res) => {
  const errors = customValidation(req);
  if (!errors.isEmpty()) {
    const { err, message } = errors.array({ onlyFirstError: true })[0];
    return res.json({ err, message });
  } else {
    const { text, id } = req.body;
    try {
      await Content.updateOne({ _id: id }, { $set: { text: text } });
      return res.status(200).json({
        err: false,
        message: "Successfully update content",
        content: req.body,
      });
    } catch (err) {
      return res
        .status(500)
        .json({ err: true, message: "Something went wrong in add content" });
    }
  }
};

const getContent = async (req, res) => {
  try {
    let content = await Content.find();
    return res.status(200).json({
      err: false,
      message: "Successfully",
      content: content[0],
    });
  } catch (err) {
    return res
      .status(500)
      .json({ err: true, message: "Something went wrong in add content" });
  }
};

module.exports = { addContent, updateContent, getContent };
