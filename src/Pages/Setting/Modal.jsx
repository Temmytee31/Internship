import React from 'react';
import trash from "../../assets/trash.png"; 

const Modal = ({ isVisible, onClose, onConfirm }) => {
  if (!isVisible) return null;

  return (
    <div>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-[#344] opacity-70 w-full h-full cursor-pointer" 
        onClick={onClose}
      ></div>
      
      {/* Modal Container */}
      <div className="fixed inset-0 flex justify-center items-center top-auto md:top-0">
        <div className="bg-white rounded-lg overflow-hidden w-[300px] md:w-[400px] p-4 z-10">
          <img className="pl-[28px] pb-[28px]" src={trash} alt="Trash icon" />
          <div className="pr-[16px] pl-[16px] pb-[24px]">
            <h4 className="text-[#101828] text-[18px] font-bold">Confirmation</h4>
            <p className="text-[#475467] text-[12.5px] pb-[16px] font-medium">
              Are you sure you want to delete your account? This action cannot be undone.
            </p>
          </div>
          <div className="flex justify-end space-x-4 p-4">
            <button
              className="bg-[#D0D5DD] text-[#344054] w-[100px] h-[40px] rounded-lg"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className="bg-[#D92D20] text-white w-[100px] h-[40px] rounded-lg"
              onClick={onConfirm}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;