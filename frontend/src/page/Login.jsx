import React, { useContext, useEffect, useState } from 'react';
import loginImage from '../assets/login.png';

import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [currState, setCurrState] = useState('Login');
  const { token, setToken, backendUrl, navigate } = useContext(ShopContext);

  const { loginUser, signInWithGoogle } = useAuth();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if (currState === 'Sign Up') {
        const response = await axios.post(backendUrl + '/api/user/register', { name, email, password });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(backendUrl + '/api/user/login', { email, password });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token]);

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      alert('Login successful!');
      navigate('/');
    } catch (error) {
      alert('Google sign in failed!');
    }
  };

  return (
    <section className='absolute top-0 left-0 h-full w-full z-50 bg-white'>
      <div className='flex h-full w-full'>
        {/* Form Side */}
        <div className='flex w-full sm:w-1/2 items-center justify-center'>
          <form
            onSubmit={onSubmitHandler}
            className='flex flex-col items-center w-[90%] sm:max-w-md
            m-auto gap-y-5 text-gray-800'
          >
            <div className='w-full mb-4'>
              <h3 className='bold-36'>{currState}</h3>
            </div>

            {currState === 'Sign Up' && (
              <div className='w-full'>
                <label htmlFor='name' className='medium-15'>
                  Name
                </label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type='text'
                  placeholder='Name'
                  required
                  className='w-full px-3 py-1.5 ring-slate-900/10 rounded bg-primary mt-1'
                />
              </div>
            )}

            <div className='w-full'>
              <label htmlFor='email' className='medium-15'>
                Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type='email'
                placeholder='Email'
                required
                className='w-full px-3 py-1.5 ring-slate-900/10 rounded bg-primary mt-1'
              />
            </div>

            <div className='w-full'>
              <label htmlFor='password' className='medium-15'>
                Password
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type='password'
                placeholder='Password'
                required
                className='w-full px-3 py-1.5 ring-slate-900/10 rounded bg-primary mt-1'
              />
            </div>

            <button className='btn-dark w-full mt-5 !py[9px]'>{currState === 'Sign Up' ? 'Sign Up' : 'Login'}</button>

            <button
              type='button'
              className='flex items-center justify-center w-full mt-3 py-2 px-4 border border-gray-300 rounded-lg bg-white text-gray-700 hover:bg-gray-100 transition-all'
              onClick={handleGoogleSignIn}
            >
              <FcGoogle size={24} className='mr-2' />
              {currState === 'Sign Up' ? 'Sign up with Google' : 'Sign in with Google'}
            </button>
            <button
              type='button'
              className='flex items-center justify-center w-full mt-3 py-2 px-4 border border-blue-600 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all'
              // onClick={handleFacebookLogin}
            >
              <FaFacebook size={24} className='mr-2' />
              {currState === 'Sign Up' ? 'Sign up with Facebook' : 'Sign in with Facebook'}
            </button>

            <div className='w-full flex flex-col gap-y-3 mt-4'>
              <div className='underline medium-15'>Forgot your password</div>
              {currState === 'Login' ? (
                <div className='underline medium-15'>
                  Don't have an account?
                  <span onClick={() => setCurrState('Sign Up')} className='cursor-pointer'>
                    Create account
                  </span>
                </div>
              ) : (
                <div className='underline medium-15'>
                  Already have an account?
                  <span onClick={() => setCurrState('Login')} className='cursor-pointer'>
                    Login
                  </span>
                </div>
              )}
            </div>
          </form>
        </div>

        {/* Image Side */}
        <div className='w-1/2 hidden sm:block'>
          <img src={loginImage} alt='' className='object-cover h-screen w-screen' />
        </div>
      </div>
    </section>
  );
};

export default Login;
