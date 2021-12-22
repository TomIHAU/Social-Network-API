const { Thought, User } = require("../models");

module.exports = {
  getUsers(req, res) {
    User.find({}).then((users) =>
      res.json(users).catch((err) => res.status(500).json(err))
    );
  },
  createUser(req, res) {
    User.create(req.body)
      .then((newUser) => res.json(newUser))
      .catch((err) => res.status(500).json(err));
  },
};
