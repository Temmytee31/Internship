import React from 'react'

const Business = () => {
  return (
    <div className=''>
         <h3 className='text-[#101828] text-[24px] font-bold pl-[16px] pr-[16] pt-[32px] lg:text-[30px]'>Settings</h3>
        <div className='border-[1px] border-[#E4E7EC] rounded-xl  ml-[16px] mr-[16px] pl-[16px] pr-[16px] mt-[24px] mb-[125px]'>
            <div className='justify-between pt-[16px] pb-[16px] lg:flex lg:justify-between '>
                <div>
                    <h4 className='text-[#101828] text-[18px] font-bold'>Business Info</h4>
                    <p className='text-[#475467] text-[14px] font-medium '>Update your company details here.</p>
                </div>
                <div className='hidden lg:block'>
                    <button className=" mb-[16px] bg-[#101828] text-white w-[100px] h-[40px] rounded-lg ">Save</button>
                </div>
            </div>
                <div className='border-b-[1px] border-[#E4E7EC] w-[100%] mb-[16px] '></div>
            <div className='pb-[16px] md:mr-[200px] lg:flex lg:gap-[290px] lg:pb-[24px]'>
                <h6 className='text-[#344054] text-[14px] font-bold pb-[20px] '>Name</h6>
                <input className='border-[1px]  border-[#D0D5DD] w-[100%] rounded-lg h-[44px] text-[#101828] text-[16px] font-medium pl-[14px] ' placeholder='Acme Inc.' type='text'/>
            </div>
                <div className='border-b-[1px] border-[#E4E7EC] w-[100%] mb-[16px]'></div>
            <div className='pb-[16px] md:mr-[200px] lg:flex lg:gap-[300px] lg:pb-[24px]'>
                <h6 className='text-[#344054] text-[14px] font-bold pb-[20px] '>Role</h6>
                <input className='border-[1px]  border-[#D0D5DD] w-[100%] rounded-lg h-[44px] text-[#101828] text-[16px] font-medium pl-[14px]  ' placeholder='CEO' type='text'/>
            </div>
                <div className='border-b-[1px] border-[#E4E7EC] w-[100%] mb-[16px]'></div>
            <div className='pb-[16px] md:mr-[200px] lg:flex lg:gap-[280px] lg:pb-[24px]'>
                <h6 className='text-[#344054] text-[14px] font-bold pb-[20px] '>Industry</h6>
                <input className='border-[1px]  border-[#D0D5DD] w-[100%] rounded-lg h-[44px] text-[#101828] text-[16px] font-medium pl-[14px] ' placeholder='Small Business' type='text'/>
            </div>
            <button className="mb-[16px] bg-[#101828] text-white w-[100%] h-[40px] rounded-lg lg:hidden">Save</button>
        </div>
    </div>
  )
}

export default Business