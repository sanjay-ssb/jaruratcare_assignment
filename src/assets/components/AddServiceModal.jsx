import React, { useState } from "react";

const AddServiceModal = ({
  isAddServiceModalOpen,
  closeAddServiceModal,
  onAddService,
  service,
}) => {
  if (!isAddServiceModalOpen) return null;
  const [formData, setFormData] = useState(service);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        formErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
      }
    });
    // Additional specific validation
    if (formData.price && formData.price <= 0) {
      formErrors.price = "Price must be a positive number";
    }
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: name === "price" ? parseFloat(value) : value, // Convert price to a float
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (validateForm()) {
      console.log("Form submitted successfully", formData)
      console.log("in addservicemoal " + formData);
    onAddService(formData);
    setFormData({ name: "", price: 0, description: "" });
    closeAddServiceModal();
    }
    else{
      console.log("Form validation failed");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="relative p-4 w-full max-w-md max-h-full">
        {/* <!-- Modal content --> */}
        <div className="relative bg-white rounded-lg shadow ">
          {/* <!-- Modal header --> */}
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
            <h3 className="text-lg font-semibold text-blue-500">
              Add New Service
            </h3>
            <button
              type="button"
              onClick={closeAddServiceModal}
              className="text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* <!-- Modal body --> */}
          <form className="p-4 md:p-5">
            <div className="grid gap-4 mb-4 grid-cols-2">
              <div className="col-span-2">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-blue-500"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`bg-gray-50 border ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  } text-blue-500 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5`}
                  placeholder="Type services name"
                  required=""
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="price"
                  className="block mb-2 text-sm font-medium text-blue-500"
                >
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  value={formData.price}
                  onChange={handleChange}
                  className={`bg-gray-50 border ${
                    errors.price ? "border-red-500" : "border-gray-300"
                  } text-blue-500 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5`}
                  placeholder="$2999"
                  required=""
                />
                {errors.price && <p className="text-red-500 text-sm">{errors.price}</p>}
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-blue-500"
                >
                  Service Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className={`block p-2.5 w-full text-sm text-blue-500 bg-gray-50 rounded-lg border ${
                    errors.description ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Write description here"
                ></textarea>
                {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
              </div>
            </div>
            <button
              type="button"
              onClick={handleSubmit}
              className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Add new service
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddServiceModal;
