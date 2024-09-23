import React from 'react';
import drum from '../../../src/assets/drum.png';

const Reset = () => {
  return (
    <div className='md:mt-[250px] '>
        <div className='flex pt-12 justify-center  items-center pb-6'>
            <img src={drum} alt='' className='w-6 h-6'></img>
            <h6 className='text-[#101828] font-bold text-xl text-center'>trackeet</h6>
        </div>
        <div className='text-center'>
            <h3 className='text-[#101828] font-bold text-2xl text-center pb-3'>Password Reset</h3>
            <p className='text-[#475467] font-normal text-[15px] text-center pb-8'>Your password has been reset successfully. Click <br></br>the button below to login.</p>
            <button className='bg-[#101828] text-white w-[310px] h-12	px-3.5 rounded-lg font-bold text-base cursor-pointer'>Login</button>
        </div>
    </div>
  )
}

export default Reset