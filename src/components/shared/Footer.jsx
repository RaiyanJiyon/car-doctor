import Image from "next/image";
import { FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-5">
      <div className="w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left gap-8">
        {/* Logo and Description */}
        <div className=" flex flex-col items-center md:items-start space-y-4">
          <div className="flex flex-col items-center space-x-2">
            <Image
              src="/assets/logo2.png"
              alt="Car Doctor"
              width={80}
              height={27}
            />
            <h2 className="text-lg font-bold mt-2">Car Doctor</h2>
          </div>
          <p className="text-[#E8E8E8] text-sm max-w-xs">
            Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial entrepreneur.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-[#F3F3F3] hover:text-white transition-colors duration-300"
            >
              <FaGoogle size={20} />
            </a>
            <a
              href="#"
              className="text-[#F3F3F3] hover:text-white transition-colors duration-300"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              className="text-[#F3F3F3] hover:text-white transition-colors duration-300"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              className="text-[#F3F3F3] hover:text-white transition-colors duration-300"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        {/* Footer Links */}
        <div className="md:w-3/5 flex flex-col md:flex-row justify-between gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2 text-[#E8E8E8] text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-[#E8E8E8] text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Why Car Doctor
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-[#E8E8E8] text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Support Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Feedback
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Accessibility
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 border-t border-gray-700 pt-6 text-center text-[#E8E8E8] text-sm">
        <p>&copy; 2023 Car Doctor. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 
