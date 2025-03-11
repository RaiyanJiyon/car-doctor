"use client";
import SocialSignIn from "@/components/shared/SocialSignIn";
import ErrorToaster from "@/components/shared/toaster/ErrorToaster";
import SuccessToaster from "@/components/shared/toaster/SuccessToaster";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { useForm } from "react-hook-form";

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:3000/sign-up/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.status === 201) {
        SuccessToaster("Sign-up successful! Please check your email.");
        reset(); // Reset the form after successful submission
      } else {
        const errorData = await response.json();
        ErrorToaster(errorData.message || "An error occurred during sign-up.");
      }
    } catch (error) {
      console.error("Network or server error:", error);
      ErrorToaster("Unable to connect to the server. Please try again later.");
    }
  };

  return (
    <section className="bg-white w-full">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto xl:gap-0 lg:py-16 lg:grid-cols-2">
        {/* Left Side - Image */}
        <div className="hidden lg:flex items-center justify-center">
          <Image
            src="/assets/images/login/login.svg"
            alt="mockup"
            width={330}
            height={323}
            className="rounded-lg"
          />
        </div>
        {/* Right Side - Form */}
        <div className="flex justify-center items-center border border-[#e8e8e8] rounded-lg">
          <div className="bg-white p-8 rounded-lg w-full md:w-11/12">
            <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Name Field */}
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-4">
                  Name
                </label>
                <input
                  id="name"
                  {...register("name", { required: "Name is required" })}
                  type="text"
                  className="w-full px-4 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Your name"
                  aria-invalid={errors.name ? "true" : "false"}
                />
                {errors.name && <span className="text-red-500">{errors.name.message}</span>}
              </div>
              {/* Email Field */}
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-4">
                  Email
                </label>
                <input
                  id="email"
                  {...register("email", { required: "Email is required" })}
                  type="email"
                  className="w-full px-4 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Your email"
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email && <span className="text-red-500">{errors.email.message}</span>}
              </div>
              {/* Password Field */}
              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-700 font-semibold mb-4">
                  Password
                </label>
                <input
                  id="password"
                  {...register("password", { 
                    required: "Password is required",
                    minLength: { value: 8, message: "Password must be at least 8 characters long" }
                  })}
                  type="password"
                  className="w-full px-4 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Your password"
                  aria-invalid={errors.password ? "true" : "false"}
                />
                {errors.password && <span className="text-red-500">{errors.password.message}</span>}
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-orange-600 transition"
              >
                Sign Up
              </button>
            </form>
            <div className="text-center my-4 text-gray-500 font-medium">
              Or Sign Up with
            </div>
            <Suspense fallback={<div>Loading...</div>}>
              <SocialSignIn />
            </Suspense>
            <p className="text-center mt-4 text-gray-600">
              Already have an account?{" "}
              <Link href="/login" className="text-primary font-bold">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;