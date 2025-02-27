"use client";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaFacebookF, FaGithub } from "react-icons/fa";

const SocialSignIn = () => {
  const router = useRouter();
  const session = useSession();

  const handleSocialSignIn = async (provider) => {
    try {
      // Call signIn with `redirect: false` to prevent automatic redirection
      const response = await signIn(provider, { redirect: false });

      // Log the response for debugging purposes
      console.log("Response from signIn:", response);

      if (session.status === "authenticated") {
        // Redirect to the home page on success
        router.push("/");
      } else {
        console.error("Error during sign-in:", response.error);
      }
    } catch (error) {
      console.error("Sign-in error:", error.message);
    }
  };

  return (
    <div className="flex justify-center space-x-4">
      <button disabled className="bg-gray-200 p-2 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-300 transition">
        <FaFacebookF className="text-blue-600" />
      </button>
      <button onClick={() => handleSocialSignIn('github')} className="bg-gray-200 p-2 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-300 transition">
        <FaGithub className="text-black" />
      </button>
      <button onClick={() => handleSocialSignIn('google')} className="bg-gray-200 p-2 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-300 transition">
        <Image
          src="/assets/icons/google.png"
          alt="google logo"
          width={15}
          height={15}
        />
      </button>
    </div>
  );
};

export default SocialSignIn;