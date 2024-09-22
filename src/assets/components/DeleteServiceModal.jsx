import React,{useState}from 'react'

const DeleteServiceModal = ({isDeleteServiceModalOpen,closeDeleteServiceModal,onDeleteService,index}) => {
  console.log("in modal"+index);
  
    if (!isDeleteServiceModalOpen) return null;

    const onDelete = () => {
      console.log("in on delete"+index);
      
      onDeleteService(index); // Pass the index to the parent
      closeDeleteServiceModal(); // Close the modal after deletion
  };
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow">
            {/* <button type="button" className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
                <span className="sr-only">Close modal</span>
            </button> */}
            <div className="p-4 md:p-5 text-center">
                <h3 className="mb-5 text-lg font-normal text-blue-800 ">Do you want to delete this service?</h3>
                <button type="button" onClick={onDelete} className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                    Delete
                </button>
                <button type="button" onClick={closeDeleteServiceModal} className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Cancel</button>
            </div>
        </div>
    </div>
</div>
  )
}

export default DeleteServiceModal;

/* import React from "react";

const DeleteServiceModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-lg mb-4">Do you want to delete this service?</h3>
        <div className="flex justify-end p-4 md:p-5 text-center">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Cancel
          </button>
          <button
            type="button"
            className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteServiceModal; */
