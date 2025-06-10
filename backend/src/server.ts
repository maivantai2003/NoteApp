import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes';
import postRoutes from './routes/postRoutes';
import cors from 'cors';

const app=express()

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/crud-demo')
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});