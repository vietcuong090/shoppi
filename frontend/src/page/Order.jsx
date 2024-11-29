import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

const Order = () => {
  const { products, currency } = useContext(ShopContext);
  console.log(products);

  return (
    <section>
      <div className='max-padd-container'>
        <div
          className='max-padd-container py-10 bg-white rounded-2xl my-6
        max-xl:mt-8'
        >
          {/* title */}
          <div className=''>
            <h3 className='h3'>
              Order <span className='text-secondary'>List</span>
            </h3>
          </div>
          {/* container */}
          {products.slice(1, 5).map((item, i) => (
            <div key={i}>
              <div className='py-4 text-gray-700 flex flex-col gap-4'>
                <div className='flex gap-x-3 w-full'>
                  {/* image */}
                  <div className='felx gap-6'>
                    <img src={item.image[0]} alt='' className='w-[77px] rounded-lg' />
                  </div>
                  {/* order info */}
                  <div className='block w-full'>
                    <h5 className='h5 capitalize line-clamp-1'>{item.name}</h5>
                    <div className='flexBetween'>
                      <div>
                        <div className='flex items-center gap-x-2 sm:gap-x-3'>
                          <div className='flexCenter gap-x-2'>
                            <h5 className='medium-14'>Price:</h5>
                            <p>
                              {currency}
                              {item.price}
                            </p>
                          </div>
                          <div className='flexCenter gap-x-2'>
                            <h5 className='medium-14'>Quantity:</h5>
                            <p>{item.quantity}</p>
                          </div>
                          <div className='flexCenter gap-x-2'>
                            <h5 className='medium-14'>Size:</h5>
                            <p>{item.size}</p>
                          </div>
                        </div>
                        <div className='flex items-center gap-x-2'>
                          <h5 className='medium-14'>Date:</h5>
                          <p className='text-gray-400'>{new Date(item.date).toDateString()}</p>
                        </div>
                        <div className='flex items-center gap-x-2'>
                          <h5 className='medium-14'>Payment</h5>
                          <p className='text-gray-400'>paymentMethod</p>
                        </div>
                      </div>
                      {/* Status & button */}
                      <div className='flex flex-col xl:flex-row gap-3'>
                        <div className='flex items-center gap-2'>
                          <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                          <p className=''>Status</p>
                        </div>
                        <button className='btn-secondary !p-1.5 !text-xs'>Track Order</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr className='mx-auto h-[1px] w-4/5 bg-gray-900/10 mt-2' />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Order;
