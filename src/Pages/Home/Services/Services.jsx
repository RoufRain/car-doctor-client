import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <div className="flex-col text-center mt-5">
        <h1 className="text-[#FF3811] font-bold text-xl">Services</h1>
        <h2 className="text-5xl font-bold text-[#151515]">Our Service Area</h2>
        <p className="py-6 text-[#737373] font-normal text-base">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((services) => (
          <ServicesCard key={services._id} services={services}></ServicesCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
