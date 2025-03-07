const ServiceCard = ({ service }) => {
    const serviceCards = service?.facility ?? []; // Default to an empty array if facility is undefined
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {serviceCards.length > 0 ? (
          serviceCards.map((serviceCard, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#F3F3F3] border border-t-2 border-t-primary border-gray-200 rounded-lg shadow-sm"
            >
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#444444]">
                  {serviceCard.name}
                </h5>
              </a>
              <p className="mb-3 font-normal text-[#737373]">{serviceCard.details}</p>
            </div>
          ))
        ) : (
          <div>No service cards available</div> // Display a message if there are no service cards
        )}
      </div>
    );
  };
  
  export default ServiceCard;
  