import express from 'express';
import { login } from '../controllers/authController.js';

const router = express.Router();

/**
 * login *
 * register
 */

router.post('/login', login);

export default router;
