"use client"; // Only if this file is used in a client-side component
import { useEffect, useState } from "react";

const useFetchTestimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/testimonials.json'); // Ensure this path is correct
        if (!response.ok) {
          throw new Error('Failed to fetch testimonials');
        }
        const data = await response.json();
        setTestimonials(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData(); // Invoke the function
  }, []); // Empty dependency array ensures this runs only once

  return { testimonials, loading, error };
};

export default useFetchTestimonials;