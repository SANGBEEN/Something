import express from 'express';
import account from './customer';

const router = express.Router();
router.use('/customer', account);

export default router;