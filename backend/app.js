
import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js'; 

import productRoutes from './routes/ProductRoutes.js';
import categoryRoutes from './routes/CategoryRoutes.js'; 

const app = express();

// CORS Configuration
const corsOptions = {
  origin: 'http://localhost:5173', 
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);

// Default Route
app.get('/', (req, res) => {
  res.send('Job Portal API is Running');
});

export default app;
