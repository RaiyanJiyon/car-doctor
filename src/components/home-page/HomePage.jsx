import Banner from "./Banner";
import BusinessInfoCard from "./BusinessInfoCard";
import CoreFeaturesCard from "./CoreFeaturesCard";
import Testimonial from "./Testimonial";

const HomePage = () => {
    return (
        <div className="w-11/12 mx-auto">
            <div className="mt-4">
                <Banner />
            </div>
            <div className="mt-20">
                <BusinessInfoCard />
            </div>
            <div className="mt-20">
                <CoreFeaturesCard />
            </div>
            <div className="mt-20">
                <Testimonial />
            </div>
        </div>
    );
};

export default HomePage;