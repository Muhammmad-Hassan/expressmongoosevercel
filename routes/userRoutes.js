const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Create user
router.post("/", userController.createUser);

// Get all users
router.get("/", userController.getUsers);

// Delete user
router.delete("/:id", userController.deleteUser);

// Update user
router.put("/:id", userController.updateUser);

module.exports = router;
