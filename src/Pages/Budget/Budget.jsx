import React from 'react'
import drum from "../../assets/drum.png";
import report from "../../assets/report.png";
import budget from "../../assets/budget.png";
import add from "../../assets/add.png";

const Budget = () => {
  return (
    <div className='flex'>
        <div className="w-1/4 bg-gray-50 h-screen p-8 ">
          <div className='flex  items-center '>
            <img src={drum} alt='' className='w-6 h-6'></img>
            <h2 className="text-2xl font-bold text-[#101828]">trackeet</h2>
          </div>
          <ul className="mt-6">
            <li className="mb-4">
              <a href="#" className="flex items-center text-gray-600 hover:text-black">
                <span className="mr-2">📄</span> Expenses
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="flex items-center text-gray-600 hover:text-black">
                <img src={budget} alt='' className="mr-2 w-[20px]"/> Budgets
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="flex items-center text-gray-600 hover:text-black">
                <img src={report} alt='' className="mr-2 w-[20px]"/> Reports
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center text-gray-600 hover:text-black">
                <span className="mr-2">⚙️</span> Settings
              </a>
            </li>
          </ul>
          <div className="absolute bottom-6 flex items-center space-x-4">
            <span className="bg-[#F2F4F7] text-[#475467] font-bold rounded-full h-10 w-10 flex items-center justify-center">PJ</span>
            <span>
              <p className="font-bold text-[#344054]">Paul James</p>
              <p className="text-sm text-[#475467]">useremail@email.com</p>
              </span>
          </div>
        </div>
      <div className="w-3/4 p-8">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold text-[#101828]">Budgets</h2>
          <button className="bg-[#101828] text-white py-2 px-4 rounded-lg">Add New</button>
        </div>
        <div className="mt-16 text-center border-2 border-dashed border-gray-300 p-10 rounded-lg">
          <div className="flex justify-center text-5xl text-gray-400">
            <img src={add} alt='' className='w-[50px]'/>
          </div>
          <p className="mt-4 text-lg text-[#101828]">No budgets added yet!</p>
          <p className="text-gray-400">Once you add any budgets, they'll start showing here.</p>
        </div>
      </div>
    </div>
  )
}

export default Budget