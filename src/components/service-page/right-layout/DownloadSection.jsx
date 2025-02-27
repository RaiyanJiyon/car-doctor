import { FaHouseSignal } from "react-icons/fa6";
import { IoArrowForwardOutline } from "react-icons/io5";

const DownloadSection = () => {
    return (
        <div className="bg-black text-white p-10 rounded-lg">
            {/* Section Title */}
            <h1 className="text-2xl font-bold">Download</h1>

            {/* Download Items */}
            <div className="space-y-7 mt-5">
                {/* Download Item: Our Brochure */}
                <div className="flex justify-between">
                    <div className="flex items-center gap-3">
                        <div>
                            <FaHouseSignal className="text-2xl" />
                        </div>
                        <div>
                            <h2 className="text-lg font-bold">Our Brochure</h2>
                            <h3 className="text-[#A2A2A2]">Download</h3>
                        </div>
                    </div>
                    <div className="flex justify-center items-center bg-primary p-5 rounded-lg">
                        <IoArrowForwardOutline className="text-white" />
                    </div>
                </div>
                
                {/* Download Item: Company Details */}
                <div className="flex justify-between">
                    <div className="flex items-center gap-3">
                        <div>
                            <FaHouseSignal className="text-2xl" />
                        </div>
                        <div>
                            <h2 className="text-lg font-bold">Company Details</h2>
                            <h3 className="text-[#A2A2A2]">Download</h3>
                        </div>
                    </div>
                    <div className="flex justify-center items-center bg-primary p-5 rounded-lg">
                        <IoArrowForwardOutline className="text-white" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DownloadSection;
