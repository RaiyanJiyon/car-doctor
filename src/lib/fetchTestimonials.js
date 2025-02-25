// lib/fetchTestimonials.js
export const fetchTestimonials = async () => {
    try {
      const response = await fetch('../../public/testimonials.json');
      if (!response.ok) {
        throw new Error('Failed to fetch testimonials');
      }
      return await response.json();
    } catch (error) {
      console.error(error.message);
      return [];
    }
  };