import userModel from '../models/userModel.js';
import validator from 'validator';
import bcrypt from 'bcrypt';
import { Jwt } from 'jsonwebtoken';

const createToken = (id) => {
  return jwt.sign({ id });
};

// user Login Route
const loginUser = async (req, res) => {};

// user Register Route
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // checking if email is already exists or not
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: 'User already exists' });
    }
    // validate password and checking string password
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: 'Please Enter a valid email' });
    }
    if (password.length < 8) {
      return res.json({ success: false, message: 'Please Enter a valid email' });
    }
    // hash user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    // const token =
  } catch (error) {}
};

// admin Login Route
const adminLogin = async (req, res) => {};
export { loginUser, registerUser, adminLogin };
//6-58-53
