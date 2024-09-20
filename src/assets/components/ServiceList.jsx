import React, { useState } from "react";

import AddServiceModal from "./AddServiceModal";
import  DeleteServiceModal  from "./DeleteServiceModal";
import  EditServiceModal  from "./EditServiceModal";

const ServiceList = ({ services,onAddProduct }) => {
  const [selectedService, setSelectedService] = useState(null);

  // State and Hndlers for Modals start here
  const [isAddServiceModalOpen, setIsAddServiceModalOpen] = useState(false);
  const openAddServiceModal = () => {
    console.log("AddServiceModal opened");
    setIsAddServiceModalOpen(true);
  };
  const closeAddServiceModal = () => {
    console.log("AddServiceModal Closed");
    setIsAddServiceModalOpen(false);
  };

  const [isDeleteServiceModalOpen, setIsDeleteServiceModalOpen] = useState(false);
  const openDeleteServiceModal=(index)=>{
    setSelectedService(index)
    setIsDeleteServiceModalOpen(true)
  }
  const closeDeleteServiceModal = () => setIsDeleteServiceModalOpen(false);

  const [isEditServiceModalOpen, setIsEditServiceModalOpen] = useState(false);
  const openEditServiceModal=(service)=>{
    setSelectedService(service)
    setIsEditServiceModalOpen(true)
  }
  const closeEditServiceModal = () => setIsEditServiceModalOpen(false);
  // State and Hndlers for Modals start here
  

  return (
    <div>
      <div className="flex flex-col gap-4 items-center justify-center">
        <h3 className="text-blue-600 text-2xl font-bold py-7">Services List</h3>

        {services.map((service, index) => {
          return (
            <div
              key={index}
              className="rounded-sm w-2/3 grid grid-cols-12 bg-white shadow p-3 gap-2 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform"
            >
              {/* Title  */}
              <div className="col-start-1 col-span-8 ">
                <p className="text-blue-600 font-semibold">{service.name}</p>
              </div>

              {/* Description */}
              <div className="col-start-1 col-span-9 ">
                <p className="text-sm text-gray-800 font-light">
                  {service.description}
                  {service.description}
                </p>
              </div>
              <div className="col-span-1 ">
                <p text-blue-600 font-semibold>
                  Price
                </p>
                <p className="text-blue-600 font-semibold">{service.price}$</p>
              </div>
              <div className="col-span-2 align">
                <div>
                  <button
                    type="button"
                    onClick={()=>openEditServiceModal(service)}
                    className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={openDeleteServiceModal}
                    className="text-white bg-red-700 hover:bg-red-800 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        <button
          type="button"
          onClick={openAddServiceModal}
          className="w-2/3 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add New Service
        </button>
        {/* Modal component */}
        {isAddServiceModalOpen && (
          <AddServiceModal
            isAddServiceModalOpen={isAddServiceModalOpen}
            closeAddServiceModal={closeAddServiceModal}
            onAddProduct={onAddProduct}
          />
        )}
        {isEditServiceModalOpen && (
          <EditServiceModal
          isEditServiceModalOpen={isEditServiceModalOpen}
            closeEditServiceModal={closeEditServiceModal}
            service={selectedService}
          />
        )}
        {isDeleteServiceModalOpen && (
          <DeleteServiceModal
          isDeleteServiceModalOpen={isDeleteServiceModalOpen}
          closeDeleteServiceModal={closeDeleteServiceModal}
          />
        )}

        {/* Modal component */}
        {/* <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-xl font-bold">Modal Content</h2>
        <p>This is a simple modal example.</p>
      </Modal> */}
        {/* Modal component */}
        {/* <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-xl font-bold">Modal Content</h2>
        <p>This is a simple modal example.</p>
      </Modal> */}
        {/* <AddServiceModal isAddServiceModalOpen={true} closeAddServiceModal={closeAddServiceModal} /> */}
      </div>
    </div>
  );
};

export default ServiceList;
