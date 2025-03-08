"use client";
import React from "react";
import PageCover from "@/components/shared/PageCover";

const ContactPage = () => {
  return (
    <div className="w-11/12 max-w-screen-2xl mx-auto">
      {/* Page Cover */}
      <PageCover title="Contact Us" prevPage="Blogs" nextPage="Home" />

      {/* Main Content */}
      <div className="my-20">
        {/* Header */}
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-6">
          Get in Touch
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
          Have questions or need assistance? We're here to help. Reach out to us
          through the contact information below or send us a message using the
          form.
        </p>

        {/* Contact Info & Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Contact Information
            </h3>
            <ul className="text-lg text-gray-700 space-y-4">
              <li>
                <strong>📞 Phone:</strong> +880-123-456-7890
              </li>
              <li>
                <strong>📧 Email:</strong>{" "}
                <a
                  href="mailto:contact@carservice.com"
                  className="text-primary hover:underline"
                >
                  contact@carservice.com
                </a>
              </li>
              <li>
                <strong>📍 Address:</strong> 123 Car Service Street, Dhaka,
                Bangladesh
              </li>
              <li>
                <strong>🕒 Hours:</strong> Mon - Fri: 9:00 AM - 6:00 PM, Sat:
                10:00 AM - 4:00 PM
              </li>
            </ul>
          </div>

          {/* Form */}
          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h3>
            <form>
              {/* Name */}
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-medium mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  required
                />
              </div>

              {/* Email */}
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-medium mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                  id="email"
                  type="email"
                  placeholder="Your Email"
                  required
                />
              </div>

              {/* Message */}
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-medium mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                  id="message"
                  rows="5"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-300 w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;