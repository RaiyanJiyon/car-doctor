// Import Next.js Image component and icons from react-icons
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const TeamMemberCard = ({ member }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-4 border border-[#e8e8e8]">
      {/* Member Image */}
      <div className="relative rounded-lg">
        <Image
          src={member.photo}
          alt={member.name}
          className="w-full h-40 object-fill rounded-lg" // Use `object-cover` for better cropping
          width={400} // Adjust based on your design
          height={160}
        />
      </div>

      {/* Member Details */}
      <div className="mt-4">
        <h2 className="text-lg font-semibold">{member.name}</h2>
        <p className="text-secondary text-sm font-semibold">{member.role}</p>

        {/* Social Media Links */}
        <div className="flex justify-center mt-4 space-x-4">
          <a
            href={`${member.socialMediaLinks.facebook}`}
            target="_blank"
            className="bg-[#395185] rounded-full p-2 text-[#F3F3F3] hover:text-white transition-colors duration-300"
          >
            <FaFacebookF size={15} />
          </a>
          <a
            href={`${member.socialMediaLinks.twitter}`}
            target="_blank"
            className="bg-[#55ACEE] rounded-full p-2 text-[#F3F3F3] hover:text-white transition-colors duration-300"
          >
            <FaTwitter size={15} />
          </a>
          <a
            href={`${member.socialMediaLinks.linkedin}`}
            target="_blank"
            className="bg-[#0A66C2] rounded-full p-2 text-[#F3F3F3] hover:text-white transition-colors duration-300"
          >
            <FaLinkedinIn size={15} />
          </a>
          <a
            href={`${member.socialMediaLinks.instagram}`}
            target="_blank"
            className="rounded-full p-2 text-[#F3F3F3] hover:text-white transition-colors duration-300"
            style={{
              background:
                "linear-gradient(150.05deg, rgb(119, 74, 223) 3.9%, rgb(151, 72, 190) 14.95%, rgb(189, 70, 151) 30.43%, rgb(216, 68, 122) 44.65%, rgb(233, 67, 105) 57%, rgb(239, 67, 99) 66.1%, rgb(239, 84, 94) 72.21%, rgb(240, 128, 83) 84.3%, rgb(242, 193, 65) 100%)",
            }}
          >
            <FaInstagram size={15} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
