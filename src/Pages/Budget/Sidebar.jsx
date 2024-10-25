import React from 'react';
import drum from "../../assets/drum.png";
import report from "../../assets/report.png";
import budget from "../../assets/budget.png";

const Sidebar = () => {
  return (
    <div>
        <div className="w-1/4 bg-gray-50 h-screen p-6">
            <div className='flex  items-center'>
                <img src={drum} alt='' className='w-6 h-6'></img>
                <h2 className="text-2xl font-semibold">trackeet</h2>
            </div>
            <ul className="mt-6">
                <li className="mb-4">
                <a href="#" className="flex items-center text-gray-600 hover:text-black">
                    <span className="mr-2">📄</span> Expenses
                </a>
                </li>
                <li className="mb-4">
                <a href="#" className="flex items-center text-gray-600 hover:text-black">
                    <img src={report} alt='' className="mr-2 w-[20px]"/> Budgets
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
                <span className="bg-gray-300 rounded-full h-10 w-10 flex items-center justify-center">PJ</span>
                <span>
                <p className="font-semibold">Paul James</p>
                <p className="text-sm text-gray-500">useremail@email.com</p>
                </span>
            </div>
        </div>
    </div>
  )
}

export default Sidebar