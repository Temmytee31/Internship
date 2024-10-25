import React from 'react'
import Delete from './Delete'

const Security = () => {
  return (
    <div className='ml-[16px] mr-[16px] '>
        <h3 className='text-[#101828] text-[24px] font-bold pl-[16px] pr-[16] pt-[32px] lg:text-[30px]'>Settings</h3>
        <div className='border-[1px] border-[#E4E7EC] rounded-xl  mt-[24px] pl-[16px] pr-[16px]'>
            <div className='justify-between pt-[16px] pb-[16px] lg:flex lg:justify-between'>
                <div>
                    <h4 className='text-[#101828] text-[18px] font-bold'>Security</h4>
                    <p className='text-[#475467] text-[14px] pb-[16px] font-medium '>Update account password here.</p>
                </div>
                <div className='hidden lg:block'>
                    <button className=" mb-[16px] bg-[#101828] text-white w-[100px] h-[40px] rounded-lg ">Save</button>
                </div>
            </div>
                <div className='border-b-[1px] border-[#E4E7EC] w-[100%] mb-[16px]'></div>
            <div className='pb-[16px] md:mr-[200px] lg:flex lg:gap-[200px] lg:pb-[24px]'>
                <h6 className='text-[#344054] text-[14px] font-bold pb-[20px] '>Old Password</h6>
                <input className='border-[1px]  border-[#D0D5DD] w-[100%] rounded-lg h-[44px] text-[#101828] text-[16px] font-medium pl-[14px] lg:w-[400px] ' placeholder='••••••••' type='text'/>
            </div>
                <div className='border-b-[1px] border-[#E4E7EC] w-[100%] mb-[16px]'></div>
            <div className='pb-[16px] md:mr-[200px] lg:flex lg:gap-[200px] lg:pb-[24px]'>
                <h6 className='text-[#344054] text-[14px] font-bold pb-[20px] '>New Password</h6>
                <input className='border-[1px]  border-[#D0D5DD] w-[100%] rounded-lg h-[44px] text-[#101828] text-[16px] font-medium  pl-[14px] lg:w-[400px] ' placeholder='••••••••' type='text'/>
            </div>
                <div className='border-b-[1px] border-[#E4E7EC] w-[100%] mb-[16px]'></div>
            <div className='pb-[16px] md:mr-[200px] lg:flex lg:gap-[140\px] lg:pb-[24px]'>
                <h6 className='text-[#344054] text-[14px] font-bold pb-[20px] '>Confirm New Password</h6>
                <input className='border-[1px]  border-[#D0D5DD] w-[100%] rounded-lg h-[44px] text-[#101828] text-[16px] font-medium pl-[14px] lg:w-[400px] ' placeholder='••••••••' type='text'/>
            </div>
            <button className="mb-[16px] bg-[#101828] text-white w-[100%] h-[40px] rounded-lg lg:hidden">Save</button>
        </div>
        <div className='border-[1px] border-[#E4E7EC] rounded-xl  w-[100%] mt-[24px] mb-[125px] pl-[16px] pr-[16px] '>
            <div className=' pt-[16px] pb-[16px]  '>
                <div>
                    <h4 className='text-[#101828] text-[18px] font-bold'>Delete Account</h4>
                    <p className='text-[#475467] text-[14px] pb-[16px] font-medium '>By deleting your account, you will permanently lose access to all your data and forfeit the ability to create or modify any information.</p>
                </div>
                <div className='border-b-[1px] border-[#E4E7EC] w-[100%] mb-[16px]'></div>
                <h6 className='text-[#D92D20] text-[14px] font-bold  cursor-pointer text-end'>Delete</h6>
            </div>
        </div>
    </div>
  )
}

export default Security