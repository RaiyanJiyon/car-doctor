import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const SignUpPage = () => {
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
            <form>
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-4">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Your name"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-4">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Your email"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-4">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Your password"
                />
              </div>
              <button type="submit" className="w-full bg-primary text-white py-4 rounded-lg hover:bg-orange-600 transition">
                Sign Up
              </button>
            </form>
            <div className="text-center my-4 text-gray-500 font-medium">
              Or Sign Up with
            </div>
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
