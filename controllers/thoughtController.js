const { Thought } = require("../models");

module.exports = {
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find({});
      res.status(200).json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async createThought(req, res) {
    try {
      const newThought = await Thought.create(req.body);
      !newThought
        ? res.status(404).send("no file found")
        : res.json(newThought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId });
      !thought
        ? res.status(404).send("no file found")
        : res.status(200).json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async deleteThought(req, res) {
    try {
      let thought = await Thought.remove({ _id: req.params.thoughtId });
      !thought
        ? res.status(404).send("no file found")
        : res.status(200).json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async changeThought(req, res) {
    try {
      const updatedThought = await Thought.updateOne(
        { _id: req.params.thoughtId },
        { $set: req.body }
      );
      res.status(200).json(updatedThought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async addReaction(req, res) {
    try {
      let thought = await Thought.updateOne(
        { _id: req.params.thoughtId },
        { $push: { reactions: req.body } }
      );
      !thought
        ? res.status(404).send("no file found")
        : res.status(200).json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async deleteReaction(req, res) {
    try {
      let thought = await Thought.updateOne(
        { _id: req.params.thoughtId },
        { $pull: { reactions: { _id: req.body._id } } }
      );
      !thought
        ? res.status(404).send("no file found")
        : res.status(200).json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
