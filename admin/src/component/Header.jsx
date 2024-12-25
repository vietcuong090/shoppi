import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/logo.png';

const Header = () => {
  return (
    <header className='flexCenter py-8 bg-white'>
      {/* logo */}
      <Link
        to={'/'}
        className='bold-24 flex absolute -top-6 left-0 
      right-0 w-full flexCenter'
      />
      <h4
        className='bg-white shadow-sm text-secondary flexCenter 
        h-28 w-28 px-2 absolute -top-5 rounded-full text-2xl'
      >
        <img src={logoImage} alt='' className='rounded-full object-cover w-full h-full' />
      </h4>
    </header>
  );
};

export default Header;
