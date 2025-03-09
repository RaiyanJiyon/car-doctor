"use client";

import PageCover from "@/components/shared/PageCover";
import { useSession } from "next-auth/react";
import React, { use } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import SuccessToaster from "@/components/shared/toaster/SuccessToaster";
import ErrorToaster from "@/components/shared/toaster/ErrorToaster";

const CheckoutPage = ({ params: paramsPromise }) => {
  const params = use(paramsPromise);
  const { id } = params;
  const { data: session, status } = useSession();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Handle form submission
  const onSubmit = async (data) => {
    try {
      const response = await fetch(`http://localhost:3000/checkout/api/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          email: session?.user?.email,
          serviceId: params.id,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Something went wrong");
      }

      const result = await response.json();
      SuccessToaster("Booking confirm");
      reset();
      router.push("http://localhost:3000/my-bookings");
    } catch (error) {
      console.error("Checkout error:", error);
      // Handle error display to user
      ErrorToaster(error.message);
    }
  };

  // Session loading state handling
  if (status === "loading") {
    return <div>Loading...</div>;
  }

  // Redirect if not authenticated
  if (status === "unauthenticated") {
    router.push("/login");
    return null;
  }

  return (
    <div className="w-11/12 max-w-screen-2xl mx-auto">
      <PageCover title="Check Out" prevPage="Home" nextPage="Checkout" />

      <div className="bg-[#F3F3F3] md:p-10 my-28">
        <div className="w-full p-8 rounded-lg ">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  {...register("firstName", {
                    required: "First name is required",
                  })}
                  type="text"
                  placeholder="First Name"
                  className="w-full p-3 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
                />
                {errors.firstName && (
                  <span className="text-red-500">
                    {errors.firstName.message}
                  </span>
                )}
              </div>
              <div>
                <input
                  {...register("lastName", {
                    required: "Last name is required",
                  })}
                  type="text"
                  placeholder="Last Name"
                  className="w-full p-3 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
                />
                {errors.lastName && (
                  <span className="text-red-500">
                    {errors.lastName.message}
                  </span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value:
                        /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/i,
                      message: "Invalid phone number",
                    },
                  })}
                  type="tel"
                  placeholder="Your Phone"
                  className="w-full p-3 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
                />
                {errors.phone && (
                  <span className="text-red-500">{errors.phone.message}</span>
                )}
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
                  value={session?.user?.email || ""}
                  readOnly
                />
              </div>
            </div>

            <div>
              <textarea
                {...register("message", { required: "Message is required" })}
                placeholder="Your Message"
                rows="4"
                className="w-full p-3 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
              />
              {errors.message && (
                <span className="text-red-500">{errors.message.message}</span>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg text-lg font-semibold hover:bg-red-600 transition duration-200"
            >
              Confirm Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
