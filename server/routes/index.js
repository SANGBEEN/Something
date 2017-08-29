import express from 'express';
import customer from './customer';
import employee from './employee';

const router = express.Router();
router.use('/customer', customer);
router.use('/employee', employee);

export default router;