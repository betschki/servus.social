const instaTouch = require("instatouch");

module.exports = (req, res) => {
  const { name = "jannisbetschki" } = req.query;

  (async () => {
    try {
      const options = { count: 100, mediaType: "image" };
      const user = await instaTouch.user({ name }, options);
      res.send(user);
    } catch (error) {
      res.send(error);
    }
  })();
};
