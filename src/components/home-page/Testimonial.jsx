"use client"

// Import testimonials data from a local module
import { testimonials } from "@/lib/testimonials";
// Import a shared section title component
import SectionTitle from "../shared/SectionTitle";
// Import Next.js Image component
import Image from "next/image";
// Import star icons from react-icons library
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay"; // Import autoplay styles
// Import required modules
import { Navigation, Autoplay } from "swiper/modules";

// Component to render star rating based on a numeric rating value
const StarRating = ({ rating }) => {
  const totalStars = 5;
  const fullStars = Math.floor(rating); // Calculate the number of full stars
  const hasHalfStar = rating % 1 !== 0; // Check if there is a half star
  const emptyStars = totalStars - fullStars - (hasHalfStar ? 1 : 0); // Calculate the number of empty stars

  return (
    <div className="flex items-center gap-1">
      {/* Render full stars */}
      {Array.from({ length: fullStars }, (_, i) => (
        <span key={`full-${i}`} className="text-[#FF912C] text-xl">
          <IoMdStar />
        </span>
      ))}
      {/* Render half star if applicable */}
      {hasHalfStar && (
        <span className="text-[#FF912C] text-xl">
          <IoMdStarHalf />
        </span>
      )}
      {/* Render empty stars */}
      {Array.from({ length: emptyStars }, (_, i) => (
        <span key={`empty-${i}`} className="text-gray-300 text-xl">
          <IoMdStarOutline />
        </span>
      ))}
    </div>
  );
};

// Component to render testimonials section
const Testimonial = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <div>
        <SectionTitle
          heading="Testimonial"
          title="What Customer Says"
          description="The majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable."
        />
      </div>

      {/* Swiper Slider */}
      <Swiper
        navigation={true} // Enable navigation arrows
        modules={[Navigation, Autoplay]} // Import Navigation and Autoplay modules
        spaceBetween={30} // Add spacing between slides
        slidesPerView={1} // Show one slide at a time
        autoplay={{
          delay: 3000, // Change slide every 3 seconds
          disableOnInteraction: false, // Keep autoplay active even after user interaction
        }}
        breakpoints={{
          640: {
            slidesPerView: 1, // 1 slide on small screens
          },
          768: {
            slidesPerView: 2, // 2 slides on medium screens
          },
        }}
        className="mySwiper"
      >
        {/* Render each testimonial as a Swiper slide */}
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-white flex flex-col justify-between min-h-[250px]">
              {/* Profile and Quote Icon */}
              <div className="flex justify-between items-start">
                <div className="flex gap-4">
                  <Image
                    src={testimonial.profile}
                    alt={`${testimonial.name}'s profile`}
                    width={64}
                    height={64}
                    className="rounded-full mb-4"
                  />
                  <div className="mt-2">
                    <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-secondary font-bold">{testimonial.title}</p>
                  </div>
                </div>
                <Image
                  className="h-12 w-12 mt-2"
                  src="/assets/icons/quote.svg"
                  alt="Quote image"
                  width={48}
                  height={48}
                />
              </div>

              {/* Quote Text */}
              <p className="mt-4 text-[#737373] text-sm grow">"{testimonial.quote}"</p>

              {/* Star Rating */}
              <div className="mt-4">
                <StarRating rating={testimonial.rating} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
