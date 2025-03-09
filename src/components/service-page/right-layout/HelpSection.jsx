import Image from "next/image";

const HelpSection = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-black px-12 pb-16 rounded-md">
      {/* Logo and Title */}
      <div className="mt-12">
        <Image src="/assets/logo2.png" alt="logo" width={133} height={72} />
        <h1 className="text-white font-bold text-2xl mt-5">Car Doctor</h1>
      </div>
      
      {/* Help Message */}
      <p className="text-white text-center font-bold text-lg mt-5">
        Need Help? We Are Here To Help You
      </p>

      {/* Special Offer Section */}
      <div className="relative bg-white rounded-md px-11 pt-5 pb-12">
        <h2 className="text-lg font-bold text-primary">
          Car Doctor <span className="text-black">Special</span>
        </h2>
        <p className="text-[#737373] text-center font-bold">
          Save up to <span className="text-primary">60% off</span>
        </p>

        {/* Call to Action Button */}
        <div className="hidden sm:flex absolute -bottom-6 justify-center items-center bg-primary text-white px-8 py-4 rounded-md">
          Get A Quote
        </div>
      </div>
    </div>
  );
};

export default HelpSection;
