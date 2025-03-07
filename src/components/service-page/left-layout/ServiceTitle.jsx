import Image from "next/image";

const ServiceTitle = ({ service }) => {
  // Validate image URL
  const isValidImageUrl = service?.img?.startsWith?.('http') || service?.img?.startsWith?.('/');

  return (
    <div>
      {/* Conditional image rendering */}
      {service?.img && isValidImageUrl ? (
        <div className="w-full">
          <Image
            src={service.img}
            alt={service.title || "service image"} // Improved alt text
            className="w-full rounded-md"
            width={752}
            height={200}
            // Add placeholder while loading
            placeholder="blur"
            blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
          />
        </div>
      ) : (
        <div className="w-full h-[200px] bg-gray-200 flex items-center justify-center rounded-md">
          No Image Available
        </div>
      )}

      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
        <p className="text-secondary">
          {service.description || "No description available"}
        </p>
      </div>
    </div>
  );
};

export default ServiceTitle;