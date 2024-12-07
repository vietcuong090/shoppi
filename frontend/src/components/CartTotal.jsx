import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

const CartTotal = () => {
  const { currency, getCartAmount, delivery_charges, products } = useContext(ShopContext);

  // Hiển thị loading nếu products chưa sẵn sàng
  if (!products || products.length === 0) {
    return <div>Loading cart details...</div>;
  }

  const cartAmount = getCartAmount();
  return (
    <div className='w-full'>
      <h3 className='bold-22 mb-5'>
        Cart <span className='text-secondary'>Total</span>
      </h3>
      <div className='flexBetween pt-3'>
        <h4 className='h4'>SubTotal:</h4>
        <p className='bold-16'>
          {currency}
          {cartAmount}.00
        </p>
      </div>
      <hr className='mx-auto h-[1px] w-full bg-gray-900/10 my-1' />
      <div className='flexBetween pt-3'>
        <h4 className='h4'>Shipping Free:</h4>
        <p className='bold-16'>{cartAmount === 0 ? '0.00' : `${currency} ${delivery_charges}`}</p>
      </div>
      <hr className='mx-auto h-[1px] w-full bg-gray-900/10 my-1' />
      <div className='flexBetween'>
        <h4 className='h4'>Total:</h4>
        <p className='bold-16'>
          {currency}
          {cartAmount === 0 ? 0.0 : cartAmount + delivery_charges}.00
        </p>
      </div>
      <hr className='mx-auto h-[1px] w-full bg-gray-900/10 my-1' />
    </div>
  );
};

export default CartTotal;
