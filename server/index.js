import express from 'express'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.routes.js'
import { connectDB } from './db/connectDb.js';


dotenv.config()
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use('/api', authRoutes)


app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
  connectDB()
});

// 