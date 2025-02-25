const SectionTitle = ({ heading, title, description }) => {
    return (
        <div className="md:w-3/5 mx-auto">
            {/* Heading Text */}
            <h3 className="text-primary font-bold mb-2">{heading}</h3>
            {/* Title Text */}
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>
            {/* Description Text */}
            <p className="text-secondary text-sm mb-8">
                {description}
            </p>
        </div>
    );
};

export default SectionTitle;
