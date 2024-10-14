const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const app = express();
require("dotenv").config()

app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.DB_URI)
    .then(() => {
        console.log("Connection successful!");
    })
    .catch((err) => {
        console.log("Error >>>>>", err);
    });

// Test route
app.get("/", (req, res) => {
    console.log("Hello server");
    res.send("Hello from server side");
});

// Use the user routes
app.use("/api/user", userRoutes);

// Start the server
app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
