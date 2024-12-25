import userModel from '../models/userModel.js';
import validator from 'validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

// user Login Route
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: 'Người dùng không tồn tại' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const token = createToken(user._id);
      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: 'Thông tin xác thực không hợp lệ.' });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// user Register Route
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // checking if email is already exists or not
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: 'Người dùng đã tồn tại' });
    }
    // validate password and checking string password
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: 'Vui lòng nhập email hợp lệ' });
    }
    if (password.length < 8) {
      return res.json({ success: false, message: 'Vui lòng nhập mật khẩu hợp lệ' });
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
    const token = createToken(user._id);

    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// admin Login Route
const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASS) {
      const token = jwt.sign(email + password, process.env.JWT_SECRET);

      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: 'Thông tin xác thực không hợp lệ' });
    }
  } catch (error) {}
};

export { loginUser, registerUser, adminLogin };
