import React from 'react'
import trash from "../../assets/trash.png";

const Delete = () => {
  return (
    <div className='absolute mt-100%'>
        <img className='pt-[36px] pl-[28px] pb-[28px]' src={trash} alt=''/>
        <div className='pr-[16px] pl-[16px] pb-[24px]'>
            <h4 className='text-[#101828] text-[18px] font-bold'>Confirmation</h4>
            <p className='text-[#475467] text-[12.5px] pb-[16px] font-medium '>Are you sure you want to delete your account? This action cannot be undone.</p>
        </div>
        <div>
            <button className='ml-[16px] mb-[16px] bg-[#D0D5DD] text-[#344054] w-[140px] h-[40px] rounded-lg cursor-pointer'>Cancel</button>
            <button className='ml-[16px] mb-[16px] bg-[#D92D20] text-white w-[140px] h-[40px] rounded-lg cursor-pointer'>Delete</button>
        </div>
    </div>
  )
}

export default Delete