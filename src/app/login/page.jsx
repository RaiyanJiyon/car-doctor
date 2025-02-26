"use client";

import SocialSignIn from "@/components/shared/SocialSignIn";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
            <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-4">
                  Email
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  name="email"
                  className="w-full px-4 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Your email"
                />
                {errors.email && <span className="text-red-500">Email is required</span>}
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-4">
                  Confirm Password
                </label>
                <input
                  {...register("password", { required: true })}
                  type="password"
                  name="password"
                  className="w-full px-4 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Your password"
                />
                {errors.password && <span className="text-red-500">Password is required</span>}
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-orange-600 transition"
              >
                Sign In
              </button>
            </form>
            <div className="text-center my-4 text-gray-500 font-medium">
              Or Sign Up with
            </div>
            <div>
              <SocialSignIn />
            </div>
            <p className="text-center mt-4 text-gray-600">
              Already have an account?{" "}
              <Link href="/sign-up" className="text-primary font-bold">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
