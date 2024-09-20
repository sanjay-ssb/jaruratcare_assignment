import "./App.css";
import React, { useState } from "react";
import ServiceList from "./assets/components/ServiceList";
import AddServiceModal from "./assets/components/AddServiceModal";
import DeleteServiceModal from "./assets/components/DeleteServiceModal";
import Modal from "./Modal.jsx";

function App() {
  const initialData = [
    {
      name: "General Consultation",
      description:
        "A general health check-up with a certified doctor to assess overall health and address any concerns.",
      price: 50.0,
    },
    {
      name: "Dental Cleaning",
      description:
        "Professional cleaning to remove plaque, tartar, and stains from teeth, promoting oral hygiene.",
      price: 80.0,
    },
    {
      name: "Blood Test (Complete Blood Count)",
      description:
        "A comprehensive blood test to evaluate overall health and detect a variety of disorders.",
      price: 30.0,
    },
  ];

  const [services, setServices] = useState(() => {
    const savedServices = localStorage.getItem('services'); // Use 'services' as the key in localStorage
    if (savedServices) {
      return JSON.parse(savedServices); // Load from localStorage if available
    } else {
      localStorage.setItem('services', JSON.stringify(initialData)); // Store initialData if no data in localStorage
      return initialData; // Set initial data as default state
    }
  });
  

  const onAddProduct = (newService) => {
    const updatedItems = [...services, newService];
    setServices(updatedItems);
    localStorage.setItem('services', JSON.stringify(updatedItems)); // Save updated array to localStorage
  };

  const onRemoveItem = (index) => {
    const updatedItems = services.filter((_, i) => i !== index);
    setServices(updatedItems);
    localStorage.setItem('services', JSON.stringify(updatedItems)); // Save updated array to localStorage
  };

  const editService = (index, newValue) => {
    const updatedServices = [...services];
    updatedServices[index] = newValue; // Update service at specific index
    setServices(updatedServices); // Update state
    localStorage.setItem('services', JSON.stringify(updatedServices)); // Update localStorage
  };

  return (
    <div className="min-h-screen w-full bg-gray-200">
      <ServiceList services={services} />
    </div>
  );
}

export default App;
