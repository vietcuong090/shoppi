import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';

// app config

const app = express();
const port = process.env.PORT || 5000;

connectDB();
connectCloudinary();

// middlware
app.use(express.json());
app.use(cors());

// api endpoints
app.use('/api/user', userRouter);

app.get('/', (req, res) => {
  res.send('API connection successful');
});

app.listen(port, () => console.log('Server is running on PORT : ' + port));
