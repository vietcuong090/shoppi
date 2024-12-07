import orderModel from '../models/orderModel.js';
import userModel from '../models/userModel.js';

// Place order using cash on delivery
const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;

    const orderData = {
      userId,
      items,
      amount,
      address,
      paymentMethod: 'COD',
      payment: false,
      date: Date.now(),
    };
    const newOrder = new orderModel(orderData);
    await newOrder.save();

    await userModel.findByIdAndUpdate(userId, { cartData: {} });

    res.json({ success: true, message: 'Order Placed' });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Place order using Stripe
const placeOrderStripe = async (req, res) => {};

// All orders data for admin panel
const allOrder = async (req, res) => {};
// All orders data for aFrontend
const userOrders = async (req, res) => {};
// updating order status from admin panel
const updateStatus = async (req, res) => {};

export { placeOrder, placeOrderStripe, allOrder, userOrders, updateStatus };
