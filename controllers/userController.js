const { Thought, User } = require("../models");

module.exports = {
  async createUser(req, res) {
    try {
      const newUser = await User.create(req.body);
      res.status(200).json(newUser);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async getUsers(req, res) {
    try {
      const allUsers = await User.find({});
      res.status(200).json(allUsers);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async getOneUser(req, res) {
    try {
      const user = await User.find({ _id: req.params.userId });
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async changeUser(req, res) {
    try {
      const updatedUser = await User.updateOne(
        { _id: req.params.userId },
        { $set: req.body }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async removeUser(req, res) {
    try {
      let userRemoved = await User.remove({ _id: req.params.userId });
      res.status(200).json(userRemoved);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async addFriend(req, res) {
    try {
      let user = await User.findOne({ _id: req.params.userId });
      await user.friends.push(req.params.friendsId);
      //if statement so cant have the same freidn twice
      await user.save();

      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async removeFriend(req, res) {
    try {
      let user = await User.updateOne(
        { _id: req.params.userId },
        { $pull: { friends: req.params.friendsId } }
      );

      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
