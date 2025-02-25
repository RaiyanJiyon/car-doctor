import teamImg from '../../../public/assets/icons/group.svg';
import watchImg from '../../../public/assets/icons/telephone.svg';
import personImg from '../../../public/assets/icons/person.svg';
import wrenchImg from '../../../public/assets/icons/Wrench.svg';
import checkImg from '../../../public/assets/icons/check.svg';
import deliveryImg from '../../../public/assets/icons/delivery.svg';
import Image from 'next/image';
import SectionTitle from '../shared/SectionTitle';

const CoreFeaturesCard = () => {
    // Array of feature objects with icon source and label
    const features = [
        { icon: teamImg, label: 'Expert Team' },
        { icon: watchImg, label: 'Timely Delivery' },
        { icon: personImg, label: '24/7 Support' },
        { icon: wrenchImg, label: 'Best Equipment' },
        { icon: checkImg, label: '100% Guarantee' },
        { icon: deliveryImg, label: 'Timely Delivery' },
    ];

    return (
        <div className="bg-white text-center">
            {/* Header Section */}
            <div>
                <SectionTitle heading="Core Features" title="Why Choose Us" description="The Majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomized Words Which Don't Look Even Slightly Believable." />
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {/* Map through the features array to create individual feature cards */}
                {features.map((feature, idx) => (
                    <div key={idx} className="flex flex-col items-center p-4 rounded-lg border border-[#e8e8e8]">
                        {/* Icon Image */}
                        <Image src={feature.icon} alt={feature.label} width={48} height={48} className="mb-2" />
                        {/* Feature Label */}
                        <p className="text-lg font-bold text-[#444444]">{feature.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CoreFeaturesCard;
