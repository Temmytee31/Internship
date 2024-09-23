import React from 'react'
import drum from '../../../src/assets/drum.png';

const Password = () => {
  return (
    <div className='md:mt-[250px] '>
        <div className='flex pt-12 justify-center  items-center pb-6'>
            <img src={drum} alt='' className='w-6 h-6'></img>
            <h6 className='text-[#101828] font-bold text-xl text-center'>trackeet</h6>
        </div>
        <div className='text-center'>
            <h3 className='text-[#101828] font-bold text-2xl text-center pb-3'>Set New Password</h3>
            <p className='text-[#475467] font-normal text-[16px] text-center pb-8'>Your new password must be different to <br></br>previously used passwords.</p>
        </div>
        <div className='text-center'>
            <label className='font-[500] text-[14px] text-[#344054] pr-[210px] pb-[6px]'>New Password</label>
            <div>
                <input type='Password' placeholder='••••••••' className='w-[310px] h-12	px-3.5 font-normal text-base
             border-[#D0D5DD] border-2 rounded-lg py-2.5 mb-[20px]'/>
            </div>
        </div>
        <div className='text-center'>
            <label className='font-[500] text-[14px] text-[#344054] pr-[150px] pb-[6px]'>Confirm New Password</label>
            <div>
                <input type='Password' placeholder='••••••••' className='w-[310px] h-12	px-3.5 font-normal text-base
             border-[#D0D5DD] border-2 rounded-lg py-2.5 mb-6'/>
            </div>
            <button className='bg-[#101828] text-white w-[310px] h-12	px-3.5 rounded-lg font-bold text-base cursor-pointer'>Set Password</button>
        </div>
    </div>
  )
}

export default Password