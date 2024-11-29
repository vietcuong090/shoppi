import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import { FaBars, FaUserCircle } from 'react-icons/fa';
import { GiBeachBag } from 'react-icons/gi';
import { FaSearch } from 'react-icons/fa';
import { TbArrowNarrowRight } from 'react-icons/tb';
import { ShopContext } from '../context/ShopContext';

const Header = () => {
  const { setShowSearch, getCartCount } = useContext(ShopContext);
  const [menuOpened, setMenuOpened] = useState(false);
  const [token, setToken] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpened((prev) => !prev);
  };
  const logout = () => {
    localStorage.removeItem('token');
    setToken('');
    // setCartItem({})
    navigate('/login');
  };
  return (
    <header className='py-5 w-full bg-white'>
      <div className='max-padd-container flexBetween'>
        {/* logo */}
        <Link to={'/'} className='bold-24 flex-1 xl:hidden'>
          <h4
            className='bg-white shadow-sm text-secondary flexCenter 
          h-28 w-28 px-2 absolute -top-5 rounded-full'
          >
            LUXURY
          </h4>
        </Link>

        {/* Navbar */}
        <div className='flex-1'>
          <Navbar
            menuOpened={menuOpened}
            toggleMenu={toggleMenu}
            containerStyles={`${
              menuOpened
                ? 'flex flex-col gap-y-12 h-screen w-[222px] absolute left-0 top-0 bg-white z-50 px-10 py-4 shadow-xl'
                : 'hidden xl:flex gap-x-5 xl:gap-x-8 medium-15 rounded-full px-2 py-1'
            }`}
          />
        </div>

        {/* logo */}
        <Link to={'/'} className='bold-24 flex-1 hidden xl:flex'>
          <h4
            className='bg-white shadow-sm text-secondary flexCenter 
          h-28 w-28 px-2 absolute -top-5 rounded-full'
          >
            LUXURY
          </h4>
        </Link>

        {/* right side */}
        <div className='flexBetween gap-x-2 xs:gap-x-8'>
          {!menuOpened && (
            <FaBars
              onClick={toggleMenu}
              className='xl:hidden
            cursor-pointer text-2xl'
            />
          )}
          <div>
            <FaSearch onClick={() => setShowSearch((prev) => !prev)} className='text-xl cursor-pointer' />
          </div>
          <Link to={'/cart'} className='flex relative'>
            <GiBeachBag className='text-[25px]' />
            <span
              className='bg-secondary text-white medium-14
            absolute right-0.5 -top-3 flexCenter w-5 h-5
            rounded-full shadow-inner'
            >
              {getCartCount()}
            </span>
          </Link>
          <div className='group relative'>
            <div onClick={() => !token & navigate('/login')}>
              <FaUserCircle className='text-2xl cursor-pointer' />
            </div>
            {token && (
              <>
                <ul
                  className='bg-white shadow-sm p-3 w-32 ring-1
                 ring-slate-900/15 rounded absolute right-0 hidden group-hover:flex flex-col'
                >
                  <li onClick={() => navigate('/orders')} className='flexBetween cursor-pointer'>
                    <p>Order</p>
                    <TbArrowNarrowRight className='text-[19px] opacity-50' />
                  </li>
                  <hr className='my-2' />
                  <li onClick={logout} className='flexBetween cursor-pointer'>
                    <p>Logout</p>
                    <TbArrowNarrowRight className='text-[19px] copacity-50' />
                  </li>
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
