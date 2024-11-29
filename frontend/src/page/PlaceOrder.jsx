import React, { useContext, useState } from 'react';
import CartTotal from '../components/CartTotal';
import { ShopContext } from '../context/ShopContext';
import Footer from '../components/Footer';

const PlaceOrder = () => {
  const { navigate } = useContext(ShopContext);
  const [method, setMethod] = useState('cod');

  return (
    <section>
      {/* container */}
      <div className='max-padd-container'>
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
                  type='text'
                  name='firstName'
                  placeholder='First Name'
                  className='ring-1 ring-slate-900/15 p-1 pl-3 
          rounded-sm bg-primary outline-none w-1/2'
                />
                <input
                  type='text'
                  name='lastName'
                  placeholder='Last Name'
                  className='ring-1 ring-slate-900/15 p-1 pl-3 
          rounded-sm bg-primary outline-none w-1/2'
                />
              </div>
              <input
                type='email'
                name='email'
                placeholder='Email'
                className='ring-1 ring-slate-900/15 p-1 pl-3 
          rounded-sm bg-primary outline-none'
              />
              <input
                type='text'
                name='phone'
                placeholder='Phone Number'
                className='ring-1 ring-slate-900/15 p-1 pl-3 
          rounded-sm bg-primary outline-none '
              />
              <input
                type='text'
                name='street'
                placeholder='Street'
                className='ring-1 ring-slate-900/15 p-1 pl-3 
          rounded-sm bg-primary outline-none '
              />
              <div className='flex gap-3'>
                <input
                  type='text'
                  name='state'
                  placeholder='State'
                  className='ring-1 ring-slate-900/15 p-1 pl-3 
          rounded-sm bg-primary outline-none w-1/2'
                />
                <input
                  type='text'
                  name='city'
                  placeholder='City'
                  className='ring-1 ring-slate-900/15 p-1 pl-3 
          rounded-sm bg-primary outline-none w-1/2'
                />
              </div>
              <div className='flex gap-3'>
                <input
                  type='text'
                  name='zipcode'
                  placeholder='Zip code'
                  className='ring-1 ring-slate-900/15 p-1 pl-3 
          rounded-sm bg-primary outline-none w-1/2'
                />
                <input
                  type='text'
                  name='country'
                  placeholder='Country'
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
                  <button
                    onClick={() => setMethod('stripe')}
                    className={`${method === 'stripe' ? 'text-secondary !font-bold' : ''} btn-light !py-1 `}
                  >
                    Stripe
                  </button>
                  <button
                    onClick={() => setMethod('cod')}
                    className={`${method === 'cod' ? 'text-secondary !font-bold' : ''} btn-light !py-1`}
                  >
                    Cash on Delivery
                  </button>
                </div>
              </div>
              <div className=''>
                <button onClick={() => navigate('/orders')} className='btn-secondary'>
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default PlaceOrder;
