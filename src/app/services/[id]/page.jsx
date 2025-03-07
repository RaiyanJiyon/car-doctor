import ServiceCard from "@/components/service-page/left-layout/ServiceCard";
import ServiceDescription from "@/components/service-page/left-layout/ServiceDescription";
import ServiceSteps from "@/components/service-page/left-layout/ServiceSteps";
import ServiceTitle from "@/components/service-page/left-layout/ServiceTitle";
import DownloadSection from "@/components/service-page/right-layout/DownloadSection";
import HelpSection from "@/components/service-page/right-layout/HelpSection";
import PricingCard from "@/components/service-page/right-layout/PricingCard";
import ServiceList from "@/components/service-page/right-layout/ServiceList";
import PageCover from "@/components/shared/PageCover";

const ServiceDetailsPage = () => {
    return (
        <div className="w-11/12 max-w-screen-2xl mx-auto mb-28">
            <div>
                <PageCover title="Service Details" prevPage="Home" nextPage="Service Details" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-20">
                <div className="col-span-2">
                    <div>
                        <ServiceTitle />
                    </div>
                    <div className="mt-8">
                        <ServiceCard />
                    </div>
                    <div className="mt-8">
                        <ServiceDescription />
                    </div>
                    <div className="mt-8">
                        <ServiceSteps />
                    </div>
                </div>
                <div className="col-span-1">
                    <div>
                        <ServiceList />
                    </div>
                    <div className="mt-8">
                        <DownloadSection />
                    </div>
                    <div className="mt-8">
                        <HelpSection />
                    </div>
                    <div className="mt-8">
                        <PricingCard />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetailsPage;