// Import Next.js Image component
import Image from "next/image"; 

const ServiceCard = ({ service }) => { 
    return ( 
        <div className="bg-white shadow-lg rounded-xl p-4 border border-[#e8e8e8]">
            {/* Service Image */}
            <div className="relative rounded-lg"> 
                <Image 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-40 object-cover rounded-lg" // Use `object-cover` for better cropping 
                    width={400} // Adjust based on your design 
                    height={160} 
                /> 
            </div> 

            {/* Service Details */}
            <div className="mt-4"> 
                <h2 className="text-lg font-semibold">{service?.title}</h2> 
                <p className="text-red-500 font-bold">$20.00</p> 
            </div> 
        </div> 
    ); 
}; 

export default ServiceCard;
