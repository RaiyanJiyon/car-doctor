"use client";
import SocialSignIn from "@/components/shared/SocialSignIn";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import SuccessToaster from "@/components/shared/toaster/SuccessToaster";
import ErrorToaster from "@/components/shared/toaster/ErrorToaster";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { email, password } = data;
    try {
      const response = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (response.error) {
        ErrorToaster(response.error.message || "Invalid email or password.");
      } else {
        SuccessToaster("Login successful!");
        router.push("/"); // Redirect to the home
      }
    } catch (error) {
      console.error("Login error:", error.message);
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
            <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                  {...register("password", { required: "Password is required" })}
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
                Sign In
              </button>
            </form>
            <div className="text-center my-4 text-gray-500 font-medium">
              Or Sign In with
            </div>
            <div>
              <SocialSignIn />
            </div>
            <p className="text-center mt-4 text-gray-600">
              Don't have an account?{" "}
              <Link href="/sign-up" className="text-primary font-bold">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;