import React from 'react'
import drum from '../../../src/assets/drum.png';

const Check = () => {
  return (
    <div className='md:mt-[250px]'>
        <div className='flex pt-12 justify-center  items-center pb-6'>
            <img src={drum} alt='' className='w-6 h-6'></img>
            <h6 className='text-[#101828] font-bold text-xl text-center'>trackeet</h6>
        </div>
        <div>
            <h3 className='text-[#101828] font-bold text-2xl text-center pb-3'>Check your email</h3>
            <p className='text-[#475467] font-normal text-base text-center pb-8'>We sent a password reset link to<br></br> useremail@email.com</p>
            <p className='text-[#475467] font-normal text-sm text-center'>Didn’t receive the email? <span className='text-[#101828] *
            font-bold text-sm cursor-pointer hover:bg-[#475467] rounded-3xl px-1 py-1 '>Resend</span></p>
        </div>
    </div>
  )
}

export default Check