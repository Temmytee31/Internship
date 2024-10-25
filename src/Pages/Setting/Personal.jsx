import React from 'react'
import tree from "../../assets/tree.png";

const Personal = () => {
  return (
    <div>
        <h3 className='text-[#101828] text-[24px] font-bold pl-[16px] pr-[16] pt-[32px] lg:text-[30px] '>Settings</h3>
        <div className='border-[1px]  border-[#E4E7EC] rounded-xl  ml-[16px] mr-[16px] pl-[16px] pr-[16px] mt-[24px] mb-[125px] '>
            <div className='pt-[16px] pb-[16px] lg:flex lg:justify-between '>
                <div>
                    <h4 className='text-[#101828] text-[18px] font-bold'>Personal Info</h4>
                    <p className='text-[#475467] text-[14px] font-medium  '>Update your photo and personal details here.</p>
                </div>
                <div className='hidden lg:block'>
                    <button className=" mb-[16px] bg-[#101828] text-white w-[100px] h-[40px] rounded-lg ">Save</button>
                </div>
            </div>
                <div className='border-b-[1px] border-[#E4E7EC] w-[100%] mb-[16px]'></div>
            <div className='pb-[16px] md:mr-[200px] lg:flex lg:gap-[300px] lg:pb-[24px]'>
                <h6 className='text-[#344054] text-[14px] font-bold pb-[20px] '>Name</h6>
                <input className='border-[1px]  border-[#D0D5DD] w-[100%] rounded-lg h-[44px] text-[#101828] text-[16px] font-medium pl-[14px] mb-[16px] ' placeholder='Paul James' type='text'/>
            </div>
                <div className='border-b-[1px] border-[#E4E7EC] w-[100%] mb-[16px]'></div>
            <div className='pb-[16px] md:mr-[200px] lg:flex lg:gap-[300px] lg:pb-[24px]'>
                <h6 className='text-[#344054] text-[14px] font-bold pb-[20px] '>Email</h6>
                <input className='border-[1px]  border-[#D0D5DD] w-[100%] rounded-lg h-[44px] text-[#101828] text-[16px] font-medium pl-[14px] mb-[16px] ' placeholder='useremail@email.com' type='email'/>
            </div>
                <div className='border-b-[1px] border-[#E4E7EC] w-[100%]'></div>
            <div className='pb-[16px]  md:flex md:gap-[110px]   '>
                <div className=''>
                    <h6 className='text-[#344054] text-[14px] font-bold '>Your Photo</h6>
                    <p className='text-[#475467] text-[14px]'>This will be displayed on your profile.</p>
                </div>
                <div className='flex mb-[16px] pt-[16px]  '>
                    <span className="bg-[#F2F4F7] text-[#475467] font-bold rounded-full h-[64px] w-[64px] flex items-center justify-center">PJ</span>
                    <div className='border-[1px] border-[#E4E7EC] rounded-xl w-[190px] text-center items-center justify-center pb-[16px] cursor-pointer ml-[10px] md:w-[290px] md:pl-[50px] md:pr-[50px] lg:w-[350px]'>
                        <img className='m-auto pt-[16px]' src={tree} alt=''/>
                        <h6 className='text-[#475467] text-[12px] font-normal'> <span className='text-[#101828] text-[14px] font-bold '>Click to upload</span> or drag and drop SVG, PNG, JPG or GIF (max. 800x400px) </h6>
                    </div>
                </div>
            </div>
                    <div className='border-b-[1px] border-[#E4E7EC] w-[100%]'></div>
            <div className='pb-[16px]  mt-[16px] md:mr-[200px] lg:flex lg:gap-[300px] lg:pb-[24px]'>
                <h6 className='text-[#344054] text-[14px] font-bold pb-[20px] '>Country</h6>
                <input className='border-[1px]  border-[#D0D5DD] w-[100%] rounded-lg h-[44px] text-[#101828] text-[16px] font-medium pl-[14px] ' placeholder='useremail@email.com' type='text'/>
            </div>
            <button className=" mb-[16px] bg-[#101828] text-white w-[100%] h-[40px] rounded-lg lg:hidden ">Save</button>
        </div>
    </div>
  )
}

export default Personal