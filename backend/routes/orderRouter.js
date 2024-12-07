import express from 'express';
import { allOrder, placeOrder, placeOrderStripe, updateStatus, userOrders } from '../controllers/orderContrller.js';
import adminAuth from '../middleware/adminAuth.js';
import authUser from '../middleware/auth.js';

const orderRouter = express.Router();

// For Admin
orderRouter.post('/list', adminAuth, allOrder);
orderRouter.post('/status', adminAuth, updateStatus);

// For Payment
orderRouter.post('/place', authUser, placeOrder);
orderRouter.post('/stripe', authUser, placeOrderStripe);

// For User
orderRouter / post('/userorders', authUser, userOrders);

export default orderRouter;
