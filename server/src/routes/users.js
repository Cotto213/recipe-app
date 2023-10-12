// Importing required modules
import express from "express";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import { UserModel } from "../models/User.js";

// Creating a router instance
const router = express.Router();

// Route for user registration
router.post("/register", async (req, res) => {
    // Extracting user details from request body
    const { userName, email, password } = req.body;

    // Checking if user with same username or email already exists
    const user = await UserModel.findOne({ userName });
    const mail = await UserModel.findOne({ email });

    // Hashing the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // If user with same username or email already exists, return error message
    if (user) {
        return res.json({ message: "User already exists" });
    } else if (mail) {
        return res.json({ message: "Email already exists" });
    }

    // Creating a new user instance and saving it to the database
    const newUser = new UserModel({ userName, email, password: hashedPassword });
    await newUser.save();

    // Returning success message
    res.json({ message: "User created" });
});

// Route for user login
router.post("/login", async (req, res) => {
    
const { userName, password } = req.body;
const user = await UserModel.findOne({userName});

if (!user) {
    return res.json({ message: "User does not exist" });
}   

// Checking if password matches
const isPasswordCorrect = await bcrypt.compare(password, user.password);
// If password does not match, return error message
if(!isPasswordCorrect){
    return res.json({ message: "Username or Password is Incorrect!" });
}
// If password matches, return success message

// Creating a JWT token which expires in 24 hours and contains the user id as payload data 
const token = jwt.sign({ id: user._id}, "secret");
// Returning the token and user id
res.json({token, userID: user._id});

});




// Exporting the router instance
export const userRouter = router;
