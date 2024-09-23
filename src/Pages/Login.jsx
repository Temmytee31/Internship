import React from 'react';
import drum from '../../src/assets/drum.png';

const Login = () => {
  return (
    <div className='md:mt-[250px]'>
        <div className='flex pt-12 justify-center  items-center pb-6'>
            <img src={drum} alt='' className='w-6 h-6'></img>
            <h6 className='text-[#101828] font-bold text-xl text-center'>trackeet</h6>
        </div>
        <div>
          <h3 className='text-[#101828] font-bold text-2xl text-center pb-3'>Forgot Password?</h3>
          <p className='text-[#475467] font-normal text-base text-center pb-8 mx-[16px]'>No worries, we’ll send you reset instructions.</p>
        </div>
        <div className='text-center'>
          <label className='text-[#344054] font-medium text-sm pb-1.5 pr-[250px]'>Email</label>
          <div >
            <input type='Email' placeholder='Enter Your Email' className='w-72 h-12	px-3.5 font-normal text-base
             border-[#D0D5DD] border-2 rounded-lg py-2.5 mb-6 mx-[16px]'/>
          </div>
          <button className='bg-[#101828] text-white w-72 h-12	px-3.5 rounded-lg font-bold text-base cursor-pointer mx-[16px]'>Reset Password</button>
        </div>
    </div>
  )
}

export default Login