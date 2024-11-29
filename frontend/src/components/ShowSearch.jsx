import React, { useContext, useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { ShopContext } from '../context/ShopContext';
import { useLocation } from 'react-router-dom';

const ShowSearch = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  console.log('showSearch:', showSearch);
  console.log('visible:', visible);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes('collection')) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  return showSearch && visible ? (
    <section className='py-4 pb-7'>
      <div className='text-center bg-primary'>
        <div
          className='inline-flex items-center justify-center ring-1 
           ring-slate-900/5 px-3 py-1.5 rounded-full 
           bg-primary overflow-hidden ư-full'
        >
          <input
            type='text'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Search here...'
            className='border-none outline-none w-full bg-primary text-sm'
          />
          <div className='bg-primary text-center'>
            <FaSearch className='cursor-pointer' />
          </div>
        </div>
      </div>
    </section>
  ) : null;
};

export default ShowSearch;
