import React, { useContext, useState } from 'react';
import CartTotal from '../components/CartTotal';
import { ShopContext } from '../context/ShopContext';
import Footer from '../components/Footer';
import axios from 'axios';
import { toast } from 'react-toastify';

const PlaceOrder = () => {
  const { navigate, backendUrl, token, setToken, cartItems, setCartItems, getCartAmount, delivery_charges, products } =
    useContext(ShopContext);
  const [method, setMethod] = useState('cod');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: '',
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      let orderItems = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(products.find((product) => product._id === items));
            if (itemInfo) {
              itemInfo.size = item;
              itemInfo.quantity = cartItems[items][item];
              orderItems.push(itemInfo);
            }
          }
        }
      }
      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_charges,
      };

      switch (method) {
        case 'cod':
          const response = await axios.post(backendUrl + '/api/order/place', orderData, { headers: { token } });
          if (response.data.success) {
            setCartItems({});
            navigate('/orders');
          } else {
            toast.error(response.data.message);
          }
          break;
        case 'stripe':
          const responseStripe = await axios.post(backendUrl + '/api/order/stripe', orderData, { headers: { token } });
          if (responseStripe.data.success) {
            const { session_url } = responseStripe.data;
            window.location.replace(session_url);
          } else {
            toast.error(responseStripe.data.message);
          }
          break;
        default:
          break;
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <section>
      {/* container */}
      <form onSubmit={onSubmitHandler} className='max-padd-container'>
        <div
          className='max-padd-container py-10 bg-white rounded-2xl
        my-6 max-xl:mt-8 '
        >
          <div className='flex flex-col xl:flex-row gap-20 xl:gap-28'>
            <div className='flex flex-1 flex-col gap-3 text-[95%]'>
              {/* delivery information */}
              <h3 className='h3'>Delivery Information</h3>
              <div className='flex gap-3'>
                <input
                  onChange={onChangeHandler}
                  value={formData.firstName}
                  type='text'
                  name='firstName'
                  placeholder='First Name'
                  required
                  className='ring-1 ring-slate-900/15 p-1 pl-3 
          rounded-sm bg-primary outline-none w-1/2'
                />
                <input
                  onChange={onChangeHandler}
                  value={formData.lastName}
                  type='text'
                  name='lastName'
                  placeholder='Last Name'
                  required
                  className='ring-1 ring-slate-900/15 p-1 pl-3 
          rounded-sm bg-primary outline-none w-1/2'
                />
              </div>
              <input
                onChange={onChangeHandler}
                value={formData.email}
                type='email'
                name='email'
                placeholder='Email'
                required
                className='ring-1 ring-slate-900/15 p-1 pl-3 
          rounded-sm bg-primary outline-none'
              />
              <input
                onChange={onChangeHandler}
                value={formData.phone}
                type='text'
                name='phone'
                placeholder='Phone Number'
                required
                className='ring-1 ring-slate-900/15 p-1 pl-3 
          rounded-sm bg-primary outline-none '
              />
              <input
                onChange={onChangeHandler}
                value={formData.street}
                type='text'
                name='street'
                placeholder='Street'
                required
                className='ring-1 ring-slate-900/15 p-1 pl-3 
          rounded-sm bg-primary outline-none '
              />
              <div className='flex gap-3'>
                <input
                  onChange={onChangeHandler}
                  value={formData.state}
                  type='text'
                  name='state'
                  placeholder='State'
                  required
                  className='ring-1 ring-slate-900/15 p-1 pl-3 
          rounded-sm bg-primary outline-none w-1/2'
                />
                <input
                  onChange={onChangeHandler}
                  value={formData.city}
                  type='text'
                  name='city'
                  placeholder='City'
                  required
                  className='ring-1 ring-slate-900/15 p-1 pl-3 
          rounded-sm bg-primary outline-none w-1/2'
                />
              </div>
              <div className='flex gap-3'>
                <input
                  onChange={onChangeHandler}
                  value={formData.zipcode}
                  type='text'
                  name='zipcode'
                  placeholder='Zip code'
                  required
                  className='ring-1 ring-slate-900/15 p-1 pl-3 
          rounded-sm bg-primary outline-none w-1/2'
                />
                <input
                  onChange={onChangeHandler}
                  value={formData.country}
                  type='text'
                  name='country'
                  placeholder='Country'
                  required
                  className='ring-1 ring-slate-900/15 p-1 pl-3 
          rounded-sm bg-primary outline-none w-1/2'
                />
              </div>
            </div>
            {/* cart total */}
            <div className='flex flex-1 flex-col'>
              <CartTotal />
              {/* Payment method */}
              <div className='my-6'>
                <h3 className='bold-20 mb-5'>
                  Payment <span className='text-secondary'>Method</span>
                </h3>
                <div className='flex gap-3 '>
                  <div
                    onClick={() => setMethod('stripe')}
                    className={`${
                      method === 'stripe' ? 'text-secondary !font-bold' : ''
                    } btn-light !py-1 cursor-pointer`}
                  >
                    Stripe
                  </div>
                  <div
                    onClick={() => setMethod('cod')}
                    className={`${method === 'cod' ? 'text-secondary !font-bold' : ''} btn-light !py-1 cursor-pointer`}
                  >
                    Cash on Delivery
                  </div>
                  <div
                    // onClick={() => setMethod('cod')}
                    className={`'text-secondary !font-bold' : ''} btn-light !py-1 cursor-pointer`}
                  >
                    MoMo
                  </div>
                </div>
              </div>
              <div className=''>
                <button type='submit' className='btn-secondary'>
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
      <Footer />
    </section>
  );
};

export default PlaceOrder;
