import jwt from 'jsonwebtoken';

const authUser = async (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    return res.json({ succsess: false, message: 'Not Authorized Please Login' });
  }
  try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = token_decode.id;
    next();
  } catch (error) {
    console.log(error);
    res.json({ succsess: false, message: error.message });
  }
};

export default authUser;
