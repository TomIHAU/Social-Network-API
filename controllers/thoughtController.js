const { Thought, User } = require("../models");

module.exports = {
  getThoughts(req, res) {
    Thought.find({}).then((thoughts) =>
      res.json(thoughts).catch((err) => res.status(500).json(err))
    );
  },
  createThought(req, res) {
    Thought.create(req.body)
      .then((thought) =>
        !thought ? res.status(404).send("no file found") : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought ? res.status(404).send("no file found") : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
};
