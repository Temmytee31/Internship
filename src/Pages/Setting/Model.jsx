import React from 'react'
import ReactDOM from 'react-dom';
import Delete from './Delete';

const Model = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;
    
  return ReactDOM.createPortal (
    <div>
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full">
                {/* Modal Header */}
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">{title}</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
                        &times;
                    </button>
                    </div>

                    {/* Modal Body */}
                    <div>{children}</div>

                    {/* Modal Footer */}
                    <div className="mt-4 text-right">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>,
        document.getElementById('modal-root')
    </div>
  )
}

export default Model