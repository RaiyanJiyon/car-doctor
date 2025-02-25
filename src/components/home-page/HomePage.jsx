import Banner from "./Banner";
import BusinessInfoCard from "./BusinessInfoCard";

const HomePage = () => {
    return (
        <div className="w-11/12 mx-auto">
            <div className="mt-4 mb-20">
                <Banner />
            </div>
            <div>
                <BusinessInfoCard />
            </div>
        </div>
    );
};

export default HomePage;