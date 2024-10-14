const UserModel = require("../model/userModel");

// Create User
const createUser = async (req, res) => {
    try {
        const { userName, password } = req.body;
        const user = new UserModel({ userName, password });
        const savedUser = await user.save();
        res.json(savedUser);
    } catch (error) {
        res.status(500).json({ error: "Failed to create user" });
    }
};

// Get all Users
const getUsers = async (req, res) => {
    try {
        const users = await UserModel.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch users" });
    }
};

// Delete User
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = await UserModel.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).json({ error: "User not found" });
        }
        res.json(deletedUser);
    } catch (error) {
        res.status(500).json({ error: "Failed to delete user" });
    }
};

// Update User
const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { userName, password } = req.body;
        const updatedUser = await UserModel.findByIdAndUpdate(id, { userName, password }, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ error: "User not found" });
        }
        res.json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: "Failed to update user" });
    }
};

module.exports = {
    createUser,
    getUsers,
    deleteUser,
    updateUser,
};
