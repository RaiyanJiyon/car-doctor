// Import necessary components and services
import services from "@/lib/services"; 
import SectionTitle from "../shared/SectionTitle"; 
import ServiceCard from "./ServiceCard"; 

const Services = () => { 
    return ( 
        <div>
            {/* Header Section */}
            <div> 
                <SectionTitle 
                    heading="Popular Products" 
                    title="Browse Our Products" 
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
        </div> 
    ); 
}; 

export default Services;
