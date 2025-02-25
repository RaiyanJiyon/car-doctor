// Import necessary components and services
import services from "@/lib/services";
import SectionTitle from "../shared/SectionTitle";
import ServiceCard from "./ServiceCard";
import Link from "next/link";

const Services = () => {
  return (
    <div>
      {/* Header Section */}
      <div>
        <SectionTitle
          heading="Service"
          title="Our Service Area"
          description="The majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable."
        />
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-16">
        {
          // Map through services array and render a ServiceCard for each service
          services.map((service, idx) => (
            <ServiceCard key={idx} service={service} />
          ))
        }
      </div>

      <div className="flex justify-center">
        <Link
          href="/"
          className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-primary hover:text-white border border-primary rounded-lg hover:bg-primary hover:border-none focus:ring-4 focus:ring-gray-100"
        >
          More Services
        </Link>
      </div>
    </div>
  );
};

export default Services;
