"use client"

import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// Import required modules
import { Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";

// Import your images
const bannerImg1 = "https://i.ibb.co.com/GvdpvhhT/1.jpg";
const bannerImg2 = "https://i.ibb.co.com/fdwBWzQq/2.jpg";
const bannerImg3 = "https://i.ibb.co.com/67gKVsj6/3.jpg";
const bannerImg4 = "https://i.ibb.co.com/s9tQGKNj/4.jpg";
const bannerImg5 = "https://i.ibb.co.com/0VdGRJZS/5.jpg";
const bannerImg6 = "https://i.ibb.co.com/5xRxN6V6/6.jpg";

const Banner = () => {
  // State to hold the current background image
  const [currentBackground, setCurrentBackground] = useState(bannerImg1);

  // Array of banner images
  const bannerImages = [
    bannerImg1,
    bannerImg2,
    bannerImg3,
    bannerImg4,
    bannerImg5,
    bannerImg6,
  ];

  return (
    <div className="rounded-lg overflow-hidden"> {/* Wrapper with overflow hidden */}
      <section
        className="bg-cover bg-center h-[400px] md:h-[500px] relative"
        style={{ backgroundImage: `url(${currentBackground})`, objectFit: 'fill' }}
      >
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content inside the banner */}
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 relative z-10">
          <div className="mr-auto place-self-center lg:col-span-7 mt-10 md:ml-10">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
              Affordable Price For Car Servicing
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-300 lg:mb-8 md:text-lg lg:text-xl">
              There are many variations of passages of available, but the majority have suffered alteration in some form.
            </p>
            <Link
              href="/"
              className="bg-primary inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-gray-100"
            >
              Discover More
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-gray-300 rounded-lg hover:bg-primary hover:border-none focus:ring-4 focus:ring-gray-100"
            >
              Latest Project
            </Link>
          </div>
        </div>

        {/* Swiper for Background Image Cycling */}
        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 3000, // Change image every 3 seconds
            disableOnInteraction: false,
          }}
          pagination={{
            dynamicBullets: true,
          }}
          onSlideChange={(swiper) => {
            // Update the background image based on the active slide index
            setCurrentBackground(bannerImages[swiper.activeIndex]);
          }}
          className="hidden" // Hide the Swiper visually since we only use it for logic
        >
          {bannerImages.map((image, index) => (
            <SwiperSlide key={index}></SwiperSlide> // Empty slides
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default Banner;
