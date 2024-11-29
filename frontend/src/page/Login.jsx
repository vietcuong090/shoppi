import React, { useState } from 'react';
import loginImg from '../assets/login.png';

const Login = () => {
  const [currState, setCurrState] = useState('Sign Up');
  return (
    <section className='absolute top-0 left-0 h-full w-full z-50 bg-white'>
      {/* container */}
      <div className='flex h-full w-full'>
        {/* Form Side */}
        <div className='flex w-full sm:w-1/2 items-center justify-center'>
          <form
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
                type='password'
                placeholder='Password'
                required
                className='w-full px-3 py-1.5 ring-slate-900/10 rounded bg-primary mt-1'
              />
            </div>
            <button className='btn-dark w-full mt-5 !py[9px]'>{currState === 'Sign Up' ? 'Sign Up' : 'Login'}</button>

            <div className='w-full flex flex-col gap-y-3'>
              <div className='underline medium-15'>Forgot your password</div>
              {currState === 'Login' ? (
                <div className='underline medium-15'>
                  Don't have and account?
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
        {/* image side */}
        <div className='w-1/2 hidden sm:block'>
          <img src={loginImg} alt='' className='object-cover h-full' />
        </div>
      </div>
    </section>
  );
};

export default Login;
//5-51-43
