import React from 'react';
import { Link } from 'react-router-dom';
import {
  BsEnvelopeFill,
  BsFacebook,
  BsGeoAltFill,
  BsInstagram,
  BsLinkedin,
  BsTelephoneFill,
  BsTwitterX,
} from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className='max-padd-container mt-10'>
      <div className='max-padd-container bg-black text-white py-10 rounded-tr-3xl rounded-tl-3xl'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8'>
          {/* Logo */}
          <div>
            <Link to='/'>
              <h4 className='bold-24 text-secondary'>LUXURY</h4>
            </Link>
            <p className='text-white mt-5'>
              Crafted with care and dedication. Bring quality and style right to your doorstep. Your satisfaction is our
              promise!
            </p>
            <p className='mt-4 text-white'>Copyright 2024 Luxury. All rights reserved.</p>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className='h4 mb-4'>Quick Links</h4>
            <ul className='space-y-2 regular-15'>
              <li className='text-gray-500'>
                <a href='/about'>About Us</a>
              </li>
              <li className='text-gray-500'>
                <a href='/properties'>Products</a>
              </li>
              <li className='text-gray-500'>
                <a href='/services'>Services</a>
              </li>
              <li className='text-gray-500'>
                <a href='/contact'>Contact</a>
              </li>
              <li className='text-gray-500'>
                <a href='/privacy-policy'>Privacy Policy</a>
              </li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h4 className='h4 mb-4'>Contact Us</h4>
            <p className='text-gray-500 mb-2'>
              <BsTelephoneFill className='inline-block mr-2' />
              +84 1234-5678
            </p>
            <p className='text-gray-500 mb-2'>
              <BsEnvelopeFill className='inline-block mr-2' /> luxury@gmail.com
            </p>
            <p className='text-gray-500 mb-2'>
              <BsGeoAltFill className='inline-block mr-2' />
              123 Luxury, Huong Tra, TTT Hue
            </p>
          </div>
          {/* Social Media Links */}
          <div>
            <h4 className='h4 mb-4'>Follow Us</h4>
            <div className='flex space-x-4 text-secondary'>
              <a href='#' target='_blank' rel='noopener noreferrer'>
                <BsFacebook />
              </a>
              <a href='#' target='_blank' rel='noopener noreferrer'>
                <BsTwitterX />
              </a>
              <a href='#' target='_blank' rel='noopener noreferrer'>
                <BsInstagram />
              </a>
              <a href='#' target='_blank' rel='noopener noreferrer'>
                <BsLinkedin />
              </a>
            </div>
          </div>
        </div>
        <div className='mt-10 text-center text-gray-500'>
          <p>
            Powered by <a href='#'>Luxury Team</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
