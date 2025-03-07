import CoreFeaturesCard from "@/components/home-page/CoreFeaturesCard";
import TeamMembersSection from "@/components/home-page/TeamMembersSection";
import PageCover from "@/components/shared/PageCover";

const AboutPage = () => {
  return (
    <div className="w-11/12 max-w-screen-2xl mx-auto">
      <PageCover title="About Us" prevPage="Home" nextPage="Services" />

      <div className="mt-20">
        <TeamMembersSection />
      </div>
      <div className="my-20">
        <CoreFeaturesCard />
      </div>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white text-center rounded-lg mb-20">
        <h2 className="text-3xl font-bold mb-4">
          Want to Learn More About Us?
        </h2>
        <p className="text-lg mb-6">
          Feel free to contact us for more details about our services and team.
        </p>
        <button className="bg-white text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition duration-200">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default AboutPage;
