const express = require("express");
const app = express();
const mongoose = require("mongoose");
const usermodel = require("./model/userModel");
app.use(express.json())


mongoose.connect("mongodb://127.0.0.1:27017/smitcrud").then(() => {
    console.log("connection succesfull!");
}).catch((err) => {
    console.log("err>>>>>", err)
})




app.get("/", (req, res) => {
    console.log("Hello server");
    res.send("Hello from server side");
})

// create User
app.post("/api/user", async (req, res) => {

    const { userName, password } = req.body;
    const db = new usermodel({ userName, password });
    const user = await db.save()
    res.json(user);
})
// delete user
app.delete("/api/user/:id", async (req, res) => {

    const id = req.params.id;
    const user = await usermodel.findByIdAndDelete({ _id: id });
    res.json(user);
})

// Update User
app.put("/api/user/:id", async (req, res) => {

    const id = req.params.id;
    const { userName, password } = req.body;
    const updateUser = await usermodel.findByIdAndUpdate(id, { userName, password });
    res.json(updateUser);
})

app.get("/api/user", async (req, res) => {

    const users = await usermodel.find();
    res.json(users);
})

app.listen(5000, () => {
    console.log("server is running");
})