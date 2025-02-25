import Banner from "./Banner";
import BusinessInfoCard from "./BusinessInfoCard";
import CoreFeaturesCard from "./CoreFeaturesCard";
import Products from "./Products";
import Services from "./Services";
import Testimonial from "./Testimonial";

const HomePage = () => {
    return (
        <div className="w-11/12 mx-auto">
            <div className="mt-4">
                <Banner />
            </div>
            <div className="mt-20">
                <Services />
            </div>
            <div className="mt-20">
                <BusinessInfoCard />
            </div>
            <div className="mt-20">
                <Products />
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