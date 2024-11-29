import React from 'react';
import { BsFire } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className='max-padd-container max-xl:mb-8 mb-16'>
      <div
        className='max-padd-container bg-hero bg-cover
      bg-no-repeat h-[736px] w-full rounded-tl-3xl rounded-tr-3xl mt-6'
      >
        <div className='relative max-w-[777px] top-48'>
          <h5
            className='flex items-baseline gap-x-2 uppercase
          text-secondary medium-18'
          >
            MODERN COLLECTION <BsFire />
          </h5>
          <h1 className='h1 capitalize max-w-[611px]'>Elevate your Look with every click shop today</h1>
          <p
            className='pl-2 max-w-lg mt-6 mb-8 border-1-4
          border-l-secondary'
          >
            Discover quality and style with our premium collection. Shop confidently for unique, fashionable pieces that
            elevate your wardrobe!
          </p>
          <div className='flex gap-2 sm:gap-6 mt-14'>
            <Link className='btn-dark max-sm:!p-3'>Latest Products</Link>
            <Link className='btn-secondary max-sm:!p-3'>Popular Products</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
// 1-31
