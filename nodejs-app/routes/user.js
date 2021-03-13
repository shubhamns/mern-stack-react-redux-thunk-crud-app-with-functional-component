const express = require("express");
const router = express.Router();
const {
  createUser,
  readUser,
  readUserById,
  updateUser,
  deleteUser,
} = require("../controllers/user");

router.post("/user", createUser);

router.get("/user", readUser);

router.get("/user/:userId", readUserById);

router.put("/user/:userId", updateUser);

router.delete("/user/:userId", deleteUser);

module.exports = router;
