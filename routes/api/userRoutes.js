const router = require("express").Router();

const {
  createUser,
  getUsers,
  getOneUser,
  changeUser,
  removeUser,
  addFriend,
  removeFriend,
} = require("../../controllers/userController");

router.route("/").post(createUser).get(getUsers);

router.route("/:userId").get(getOneUser).put(changeUser).delete(removeUser);

router
  .route("/:userId/friends/:friendsId")
  .post(addFriend)
  .delete(removeFriend);

module.exports = router;
