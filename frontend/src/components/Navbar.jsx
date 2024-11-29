import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaRegWindowClose } from 'react-icons/fa';
import { SiGooglehome, SiAtlassian, SiMaildotcom } from 'react-icons/si';
import { BsCollectionFill } from 'react-icons/bs';

const Navbar = ({ containerStyles, toggleMenu, menuOpened }) => {
  const navItems = [
    { to: '/', lable: 'Home', icon: <SiGooglehome /> },
    { to: '/collection', lable: 'Collection', icon: <BsCollectionFill /> },
    { to: '/about', lable: 'About', icon: <SiAtlassian /> },
    { to: '/mailto:support@shoppire.com', lable: 'Contact', icon: <SiMaildotcom /> },
  ];
  return (
    <nav className={containerStyles}>
      {/* nút đóng bên trong thanh điều hướng */}
      {menuOpened && (
        <>
          <FaRegWindowClose
            onClick={toggleMenu}
            className='text-xl self-end cursor-pointer
          relative left-8 text-secondary'
          />
          {/* logo */}
          <Link to={'/'} className='bold-24 mb-10'>
            <h4
              className='bold-24 mb-10
            text-secondary'
            >
              Shopire
            </h4>
          </Link>
        </>
      )}
      {navItems.map(({ to, lable, icon }) => (
        <div key={lable} className='inline-flex'>
          <NavLink
            to={to}
            className={({ isActive }) => (isActive ? 'active-link flexCenter gap-x-2' : 'flexCenter gap-x-2')}
            onClick={menuOpened && toggleMenu}
          >
            {icon}
            <h5 className='medium-16'>{lable}</h5>
          </NavLink>
        </div>
      ))}
    </nav>
  );
};

export default Navbar;
