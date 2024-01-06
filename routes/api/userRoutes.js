const router = require("express").Router();

const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
} = require("../../controllers/user-controller");

router.get("/", getAllUsers).post("/", createUser);

router.get("/:id", getUserById).post("/:id", updateUser);

module.exports = router;
