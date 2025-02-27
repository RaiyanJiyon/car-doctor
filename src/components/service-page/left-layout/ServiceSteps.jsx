const processSteps = [
    {
        stepNumber: "01",
        stepTitle: "STEP ONE",
        description: "It Uses A Dictionary Of Over 200."
    },
    {
        stepNumber: "02",
        stepTitle: "STEP TWO",
        description: "It Uses A Dictionary Of Over 200."
    },
    {
        stepNumber: "03",
        stepTitle: "STEP THREE",
        description: "It Uses A Dictionary Of Over 200."
    }
];

const ServiceSteps = () => {
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {processSteps.map((step, index) => (
                    <div key={index} className="text-center border-t-[#737373] border-t-2 rounded-md p-6 hover:bg-[#f0f0f0]">
                        <div className="bg-[#FF38111A] rounded-full w-16 h-16 flex items-center justify-center mt-10 mb-4 mx-auto">
                            <div className="bg-primary rounded-full w-12 h-12 flex items-center justify-center text-white text-lg font-bold">
                                {step.stepNumber}
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h1 className="text-lg font-bold">{step.stepTitle}</h1>
                            <p className="text-sm text-secondary">{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="w-full mt-8">
                <iframe className="w-full" height="400" src="https://www.youtube.com/embed/hBPvKna1Adw?si=lnRy2WCFOrwVpMYq" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </div>
    );
};

export default ServiceSteps;
