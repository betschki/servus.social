const instaTouch = require("instatouch");

module.exports = (req, res) => {
  const options = { sessionid: "14658359590:YhRALUTKxQcRTo:8" };
  instaTouch.user("jannisbetschki", options).then((result) => {
    req.send(result.collector);
  });
};
