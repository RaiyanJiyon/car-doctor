// Import Next.js Image component
import Image from "next/image";
import Link from "next/link";

const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-4 border border-[#e8e8e8]">
      {/* Service Image */}
      <div className="relative rounded-lg">
        <Image
          src={service.img}
          alt={service.title}
          className="w-full h-40 object-fill rounded-lg" // Use `object-cover` for better cropping
          width={400} // Adjust based on your design
          height={160}
        />
      </div>

      {/* Service Details */}
      <div className="mt-4">
        <h2 className="text-lg font-semibold">{service?.title}</h2>

        <div className="flex justify-between items-center mt-6">
          <p className="text-red-500 font-bold">$20.00</p>
          <Link href={`/services/${service._id}`}>
          <button
            type="button"
            className="bg-primary text-white font-bold p-2 rounded-md"
            >
            Buy Now
          </button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
