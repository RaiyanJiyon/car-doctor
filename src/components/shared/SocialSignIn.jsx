import Image from "next/image";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const SocialSignIn = () => {
    return (
        <div className="flex justify-center space-x-4">
            <button className="bg-gray-200 p-2 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-300 transition">
                <FaFacebookF className="text-blue-600" />
            </button>
            <button className="bg-gray-200 p-2 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-300 transition">
                <FaLinkedinIn className="text-blue-600" />
            </button>
            <button className="bg-gray-200 p-2 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-300 transition">
                <Image
                    src="/assets/icons/google.png"
                    alt="google logo"
                    width={15}
                    height={15}
                />
            </button>
        </div>
    );
};

export default SocialSignIn;