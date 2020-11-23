let count = 0;
const apiCount = (req, res, next) => {
  console.log(++count);
  next();
};

module.exports = { apiCount };
