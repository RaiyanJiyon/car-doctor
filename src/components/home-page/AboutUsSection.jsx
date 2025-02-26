import Image from "next/image";
import Link from "next/link";

const AboutUsSection = () => {
    return (
        <section className="bg-white">
            {/* Container for the grid layout */}
            <div className="grid px-4 py-8 mx-auto lg:gap-8 xl:gap-16 lg:py-16 lg:grid-cols-12">
                {/* Container for the image section (visible only on larger screens) */}
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex relative w-11/12">
                    <Image 
                    // Main image of a person
                    // src="https://i.ibb.co.com/fzybSgxL/person.jpg" 
                    src="/assets/images/about_us/person.jpg" 
                    alt="mockup"
                    width={460}
                    height={473}
                    className="rounded-lg" 
                    />

                    <div className="absolute -bottom-16 -right-10 border border-white rounded-lg p-1 bg-white">
                    <Image 
                    // Secondary image of parts
                    // src="https://i.ibb.co.com/dJrdRHhL/parts.jpg" 
                    src="/assets/images/about_us/parts.jpg" 
                    alt="mockup"
                    width={330}
                    height={323}
                    className="rounded-lg" 
                    />
                    </div>
                </div>
                {/* Container for the text section */}
                <div className="mr-auto place-self-center lg:col-span-7">
                    {/* Heading Text */}
                    <h3 className="text-primary font-bold mb-2">About Us</h3>
                    {/* Title Text */}
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">We are qualified & of experience in this field</h2>
                    {/* First Description Text */}
                    <p className="text-secondary text-sm mb-4">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable.
                    </p>
                    {/* Second Description Text */}
                    <p className="text-secondary text-sm mb-8">
                        the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable.
                    </p>

                    {/* Link to Get More Info */}
                    <Link
                        href="/"
                        className="bg-primary inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-gray-100"
                    >
                        Get More Info
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AboutUsSection;
