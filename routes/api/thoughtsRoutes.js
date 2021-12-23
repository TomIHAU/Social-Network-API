const router = require("express").Router();

const {
  createThought,
  getThoughts,
  getSingleThought,
  changeThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require("../../controllers/thoughtController");

router.route("/").post(createThought).get(getThoughts);

router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(changeThought)
  .delete(deleteThought);

router.route("/:thoughtId/reactions").post(addReaction).delete(deleteReaction);

module.exports = router;
