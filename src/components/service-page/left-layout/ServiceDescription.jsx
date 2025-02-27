const ServiceDescription = () => {
    return (
        <div>
            <p className="text-secondary">
                Our car engine service is designed to keep your vehicle running smoothly and efficiently. We use the latest technology and high-quality parts to ensure the best possible performance for your engine. Trust our skilled technicians to handle all your car engine needs with precision and care.
            </p>

            <div className="mt-12">
                <h2 className="text-3xl font-bold mb-4">3 Simple Steps to Process</h2>
                <ul className="text-secondary space-y-2">
                    <span className="mb-2">Follow these three simple steps to get your car engine serviced:</span>
                    <li className="list-decimal ml-4">Schedule an appointment online or by phone.</li>
                    <li className="list-decimal ml-4">Bring your car to our service center at the scheduled time.</li>
                    <li className="list-decimal ml-4">Our technicians will perform a thorough inspection and service your engine, ensuring it runs at its best.</li>
                </ul>
            </div>
        </div>
    );
};

export default ServiceDescription;
