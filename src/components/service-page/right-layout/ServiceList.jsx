import { IoArrowForwardOutline } from "react-icons/io5";

const services = [
  "Full Car Repair",
  "Engine Repair",
  "Automatic Services",
  "Engine Oil Change",
  "Battery Charge",
];

const ServiceItem = ({ title }) => (
  <div className="flex justify-between items-center bg-white hover:bg-primary hover:text-white p-4 rounded-lg">
    <h2 className="font-semibold">{title}</h2>
    <IoArrowForwardOutline className="text-primary" />
  </div>
);

const ServiceList = () => {
  return (
    <div className="bg-[#F3F3F3] p-10 rounded-lg">
      <h2 className="text-2xl font-bold mb-5">Services</h2>

      <div className="space-y-5">
        {services.map((service, index) => (
          <ServiceItem key={index} title={service} />
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
