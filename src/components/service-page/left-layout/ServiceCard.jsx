const serviceCards = [
    {
        title: "Instant Car Services",
        description: "It Uses A Dictionary Of Over 200 Latin Words, Combined With A Model Sentence Structures."
    },
    {
        title: "24/7 Quality Service",
        description: "It Uses A Dictionary Of Over 200 Latin Words, Combined With A Model Sentence Structures."
    },
    {
        title: "Easy Customer Service",
        description: "It Uses A Dictionary Of Over 200 Latin Words, Combined With A Model Sentence Structures."
    },
    {
        title: "Quality Cost Service",
        description: "It Uses A Dictionary Of Over 200 Latin Words, Combined With A Model Sentence Structures."
    }
];

const ServiceCard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {
                serviceCards.map((serviceCard, idx) => (
                    <div key={idx} className="p-6 bg-[#F3F3F3] border border-t-2 border-t-primary border-gray-200 rounded-lg shadow-sm">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#444444]">{serviceCard.title}</h5>
                        </a>
                        <p className="mb-3 font-normal text-[#737373]">
                            {serviceCard.description}
                        </p>
                    </div>
                ))
            }
        </div>
    );
};

export default ServiceCard;
