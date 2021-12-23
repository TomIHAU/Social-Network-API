const { Thought, User } = require("../models");

module.exports = {
  createUser(req, res) {
    User.create(req.body)
      .then((newUser) => res.json(newUser))
      .catch((err) => res.status(500).json(err));
  },
  getUsers(req, res) {
    User.find({}).then((users) =>
      res.json(users).catch((err) => res.status(500).json(err))
    );
  },
  getOneUser(req, res) {
    User.find({ _id: req.params.userId }).then((users) =>
      res.json(users).catch((err) => res.status(500).json(err))
    );
  },
  changeUser(req, res) {
    User.updateOne({ _id: req.params.userId }, { $set: req.body }).then(
      (users) => res.json(users).catch((err) => res.status(500).json(err))
    );
  },
  removeUser(req, res) {
    User.remove({ _id: req.params.userId }).then((users) =>
      res.json(users).catch((err) => res.status(500).json(err))
    );
  },
};
