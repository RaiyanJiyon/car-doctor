/*
TODO: I will fixed this Testimonial data fetching issue later
*/

// components/Testimonials.jsx
import { fetchTestimonials } from "@/lib/fetchTestimonials";
import SectionTitle from "../shared/SectionTitle";

// Fetch testimonials data during build time
export async function getStaticProps() {
    const testimonials = await fetchTestimonials();
    return {
        props: {
            testimonials,
        },
        revalidate: 60, // Optional: Revalidate every 60 seconds (Incremental Static Regeneration)
    };
}

const Testimonial = ({ testimonials }) => {
    return (
        <div>
            {/* Header Section */}
            <div>
                <SectionTitle 
                    heading="Testimonial" 
                    title="What Customer Says" 
                    description="The majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable." 
                />
            </div>

            {/* Testimonials Count */}
            <div>
                <p>Total Testimonials: {testimonials?.length}</p>
            </div>
        </div>
    );
};

export default Testimonial;
