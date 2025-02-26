"use client";
import Image from "next/image";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Correct hook
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => {
    return pathname === path ? "text-primary" : "text-secondary";
  };

  // Function to handle link click and close the menu
  const handleLinkClick = () => {
    setIsOpen(false); // Close the menu
  };

  return (
    <div className="w-11/12 mx-auto">
      <nav className="bg-white w-full z-20 top-0 start-0 mt-2">
        <div className="flex flex-wrap items-center justify-between mx-auto p-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image src="/assets/logo.svg" width={80} height={86} alt="Flowbite Logo" />
          </Link>

          {/* Right Side Icons and Button */}
          <div className="flex items-center justify-between md:gap-4 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <span>
              <HiOutlineShoppingBag className="hidden sm:flex text-xl" />
            </span>
            <span>
              <IoSearchOutline className="hidden sm:flex text-xl" />
            </span>
            <button
              type="button"
              className="text-primary hover:text-white border border-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-3 text-center">
              Appointment
            </button>
            <Link
              href="/login"
              type="button"
              className="bg-primary hover:bg-red-600 text-white font-bold rounded-lg text-sm px-5 py-3 text-center">
              Login
            </Link>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-sticky"
              aria-expanded={isOpen}>
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div
            className={`${isOpen ? "block" : "hidden"} items-center justify-between w-full md:flex md:w-auto md:order-1`}
            id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
              {navLinks.map((NavLink, idx) => (
                <li key={idx}>
                  <Link
                    href={NavLink.path}
                    onClick={handleLinkClick} // Close the menu when a link is clicked
                    className={`block font-semibold py-2 px-3 rounded-sm md:bg-transparent md:p-0 ${isActive(NavLink.path)}`}
                    aria-current="page">
                    {NavLink.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;