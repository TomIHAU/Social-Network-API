const router = require("express").Router();

const { createUser, getUsers } = require("../../controllers/userController");

router.route("/").post(createUser).get(getUsers);

router.route("/:userId").get().put().delete();

router.route("/:userId/friends/:friendsId").post().delete();

module.exports = router;
