//Module exports
module.exports = {
  user: (req, res, next) => {
    if (req.user.roles === "user" || req.user.roles === "admin") {
      next();
    } else {
      res.status(401).send("Access Denied");
    }
  },

  admin: (req, res, next) => {
    if (req.user.roles === "admin") {
      next();
    } else {
      res.status(401).send("Access Denied");
    }
  },
};
