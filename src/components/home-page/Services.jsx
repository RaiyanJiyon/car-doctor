"use client"; // Add if using Client Components

import { useEffect, useState } from "react";
import SectionTitle from "../shared/SectionTitle";
import ServiceCard from "./ServiceCard";
import Link from "next/link";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const getServices = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/services/api/get-all`); // Use relative path
      const data = await response.json();
      setServices(data.data || []); // Match API response structure
    } catch (error) {
      console.error('Error fetching services:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getServices();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {/* Header Section */}
      <SectionTitle
        heading="Service"
        title="Our Service Area"
        description="The majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable."
      />

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-16">
        {services.length === 0 ? (
          <div className="col-span-full text-center">No services found</div>
        ) : (
          services.map((service, idx) => (
            <ServiceCard key={service._id || idx} service={service} />
          ))
        )}
      </div>

      <div className="flex justify-center">
        <Link
          href="/services"
          className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-primary hover:text-white border border-primary rounded-lg hover:bg-primary hover:border-none focus:ring-4 focus:ring-gray-100"
        >
          More Services
        </Link>
      </div>
    </div>
  );
};

export default Services;