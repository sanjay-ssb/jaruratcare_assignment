import "./App.css";
import ServiceList from "./assets/components/ServiceList";

function App() {

  
const services = [
  {
      name: "General Consultation",
      description: "A general health check-up with a certified doctor to assess overall health and address any concerns.",
      price: 50.00
  },
  {
      name: "Dental Cleaning",
      description: "Professional cleaning to remove plaque, tartar, and stains from teeth, promoting oral hygiene.",
      price: 80.00
  },
  {
      name: "Blood Test (Complete Blood Count)",
      description: "A comprehensive blood test to evaluate overall health and detect a variety of disorders.",
      price: 30.00
  },
  
];


  return (
    <div className="min-h-screen w-full bg-gray-200">
    <ServiceList services={services}/>
    </div>
  );
}

export default App;
