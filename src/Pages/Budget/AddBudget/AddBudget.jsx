import React from 'react';
import {useState} from 'react';
import drum from "../../../assets/drum.png";
import report from "../../../assets/report.png";
import budget from "../../../assets/budget.png"
import add from "../../../assets/add.png"

const AddBudget = () => {
    // State to manage budget form and list
  const [budgets, setBudgets] = useState([]);
  const [budgetForm, setBudgetForm] = useState({
    name: "",
    total: "",
    duration: "",
  });

  // Handle Input Changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBudgetForm({ ...budgetForm, [name]: value });
  };

  // Handle Form Submit
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (budgetForm.name && budgetForm.total && budgetForm.duration) {
      setBudgets([...budgets, budgetForm]);
      setBudgetForm({ name: "", total: "", duration: "" }); // Reset form
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
        <div className="bg-gray-100 w-64 p-6">
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
      {/* Main Content */}
        <div className="flex-1 flex">
            {/* Budgets List */}
            <div className="flex-1 p-8 bg-white">
                <h2 className="text-2xl font-semibold mb-4">Budgets</h2>
                <div className="border border-gray-200 rounded-lg p-6 mt-[32px] shadow-sm">
                <div className="flex justify-between  items-center mb-4">
                    <div>
                        <p className="text-sm text-gray-400">Office Equipments</p>
                        <h3 className="text-2xl font-bold">NGN 2,420,000.00 </h3>
                    </div>
                    <div>
                        <div className="relative h-2 bg-gray-200 rounded-lg overflow-hidden">
                            {/* <div
                                className="absolute top-0 left-0 h-full bg-black"
                                style={{ width: `${20}%` }}
                            ></div> */}
                            <input type="grade" className='bg-[#101828]'/>
                        </div>
                            <p className="text-sm text-gray-500">Amount Spent: NGN 500,000</p>
                            <button className="pt- text-sm font-semibold text-gray-600 hover:text-black">
                                View Details
                            </button>
                    </div>
                </div>
            </div>
            </div>
        </div>

        {/* Add Budget Form */}
        <div className="w-1/3 bg-gray-50 p-8 border-l">
          <h2 className="text-xl font-semibold mb-6 text-[#101828]">Add Budget</h2>
            <form onSubmit={handleFormSubmit}>
                <div className="mb-4">
                <label className="block text-[#101828]">Name</label>
                <input
                    type="text"
                    name="name"
                    value={budgetForm.name}
                    onChange={handleInputChange}
                    placeholder="Enter budget name"
                    className="mt-1 w-full p-2 border rounded"
                />
                </div>

                <div className="mb-4">
                <label className="block text-[#101828]">Total Budget (NGN)</label>
                <input
                    type="number"
                    name="total"
                    value={budgetForm.total}
                    onChange={handleInputChange}
                    placeholder="Enter total budget"
                    className="mt-1 w-full p-2 border rounded"
                />
                </div>

                <div className="mb-4">
                    <label className="block text-[#101828]">Duration</label>
                    <select
                        name="duration"
                        value={budgetForm.duration}
                        onChange={handleInputChange}
                        className="mt-1 w-full p-2 border rounded"
                    >
                        <option value="">Select duration</option>
                        <option value="Weekly">Weekly</option>
                        <option value="Monthly">Monthly</option>
                        <option value="Yearly">Yearly</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className="w-full bg-[#101828] text-white p-2 rounded hover:bg-[#101828]"
                    >
                    Save
                </button>
            </form>
        </div>
    </div>
  );
};

export default AddBudget