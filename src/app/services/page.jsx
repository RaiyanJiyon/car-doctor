import ServiceTitle from "@/components/service-page/left-layout/ServiceTitle";
import PageCover from "@/components/shared/PageCover";

const ServicesPage = () => {
    return (
        <div className="w-11/12 max-w-screen-2xl mx-auto">
            <div>
                <PageCover title="Service Details" prevPage="Home" nextPage="Service Details" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 mt-20">
                <div className="col-span-2 border border-red-500">
                    <ServiceTitle />
                </div>
                <div className="col-span-1 border border-green-500"></div>
            </div>
        </div>
    );
};

export default ServicesPage;