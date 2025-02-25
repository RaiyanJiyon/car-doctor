import Image from "next/image";

// Reusable component for Info Card
const InfoCard = ({ iconSrc, altText, description, headline }) => (
  <div className="flex items-center gap-4 text-white text-sm font-medium">
    {/* Icon Image */}
    <div>
      <Image src={iconSrc} alt={altText} width={30} height={30} />
    </div>
    {/* Text Content */}
    <div>
      <p>{description}</p>
      <h3 className="text-2xl font-bold">{headline}</h3>
    </div>
  </div>
);

const BusinessInfoCard = () => {
  // Info for each card
  const infoData = [
    {
      iconSrc: "/assets/icons/calendar.svg",
      altText: "calendar",
      description: "We are open Monday-Friday",
      headline: "7:00 am - 9:00 pm",
    },
    {
      iconSrc: "/assets/icons/telephone.svg",
      altText: "telephone",
      description: "Have a question?",
      headline: "+2546 251 2658",
    },
    {
      iconSrc: "/assets/icons/location.svg",
      altText: "location",
      description: "Need a repair? Our address",
      headline: "Liza Street, New York",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 bg-[#151515] p-6 rounded-lg shadow-lg">
      {/* Map through infoData to create InfoCard components */}
      {infoData.map((info, index) => (
        <InfoCard
          key={index}
          iconSrc={info.iconSrc}
          altText={info.altText}
          description={info.description}
          headline={info.headline}
        />
      ))}
    </div>
  );
};

export default BusinessInfoCard;
