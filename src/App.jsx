import "./App.css";
import React, { useState } from "react";
import ServiceList from "./assets/components/ServiceList";

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
  const dataWithIndex = initialData.map((service, index) => ({
    ...service,
    index: index, // Added index dynamically
  }));

  const [services, setServices] = useState(() => {
    const savedServices = localStorage.getItem('services');
    if (savedServices) {
      return JSON.parse(savedServices);
    } else {
      localStorage.setItem('services', JSON.stringify(dataWithIndex));
      return initialData;
    }
  });
  
  

  const onAddService = (newService) => {
    const updatedItems = [...services, newService];
    console.log("Added service: ", newService);
    setServices(updatedItems);
    localStorage.setItem('services', JSON.stringify(updatedItems));
  };

  const onRemoveService = (index) => {
    const updatedItems = services.filter((_, i) => i !== index);
    console.log("Removed service at index: ", index);
    setServices(updatedItems);
    localStorage.setItem('services', JSON.stringify(updatedItems));
  };

  const onEditService = (index, newValue) => {
    const updatedServices = [...services];
    updatedServices[index] = newValue;
    console.log("Edited service at index: ", index, newValue);
    setServices(updatedServices);
    localStorage.setItem('services', JSON.stringify(updatedServices));
  };

  return (
    <div className="min-h-screen w-full bg-gray-200">
      <ServiceList 
        services={services}
        onAddService={onAddService}
        onRemoveService={onRemoveService}
        onEditService={onEditService}
      />
    </div>
  );
}

export default App;
