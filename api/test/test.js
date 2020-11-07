const instaTouch = require("instatouch");

module.exports = (req, res) => {
  instaTouch.user("jannisbetschki").then((result) => {
    req.send(result.collector);
  });
};
