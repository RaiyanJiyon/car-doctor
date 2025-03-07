"use client"; // Add this directive to make the component a client component

import ServiceCard from "@/components/home-page/ServiceCard";
import useServices from "@/hooks/useServices";

const ServicesPage = () => {
  const { services, loading } = useServices();

  return (
    <div className="w-11/12 max-w-screen-2xl mx-auto mt-10 mb-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {
          services?.length > 0 && services?.map(service => (
            <ServiceCard key={service._id} service={service} />
          ))
        }
      </div>
    </div>
  );
};

export default ServicesPage;
