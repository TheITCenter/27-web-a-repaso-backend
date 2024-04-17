import express from 'express';
import authRoutes from './routes/authRoutes.js';

const api = express();

api.use(express.json());

api.use('/auth', authRoutes);

api.listen(8000, () => {
  console.log('Servidor corriendo en puerto 8000');
});
