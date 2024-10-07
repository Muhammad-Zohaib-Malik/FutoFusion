import { generateAccessToken } from "../helpers/generateAccessToken.js";
import { generateRefreshToken } from "../helpers/refreshToken.js";
import User from "../models/user.model.js";
import bcrypt from 'bcrypt'

// Signup function
export const Signup = async (req, res) => {
  const { username, email, password, accountType } = req.body;

  try {
    // Check if all required fields are provided
    if (!username || !email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    // Check if username already exists
    let user = await User.findOne({ username });
    if (user) {
      return res
        .status(400)
        .json({ success: false, message: "Username already exists" });
    }

    // Check if email already exists
    user = await User.findOne({ email });
    if (user) {
      return res
        .status(400)
        .json({ success: false, message: "Email already exists" });
    }

    // Hash the password before storing it
    const securePassword = await bcrypt.hash(password, 10);

    // Create a new user instance
    user = new User({
      username,
      email,
      password: securePassword,
      accountType,
    });

    // Save the new user to the database
    await user.save();

    // Return success message
    return res.status(201).json({
      success: true,
      message: "User created successfully",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};



export const Login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if both email and password are provided
    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Email and password are required." });
    }

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found." });
    }

    // Compare the input password with the hashed password
    const comparePassword = await bcrypt.compare(password, user.password);
    if (!comparePassword) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials." });
    }

    const data = {
      id: user._id,
      accountType: user.accountType,
      author: user.username,
    };
    const accessToken = generateAccessToken(data);
    const refreshToken = generateRefreshToken(data);

    // If credentials are valid, return a success message
    return res.status(200).json({
      success: true,
      message: "Login successful",
      accessToken,
      refreshToken,
      role: user.accountType,
      author: user.username,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: error.message });
  }
};


