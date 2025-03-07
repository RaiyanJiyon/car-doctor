"use client"

import { useState, useEffect } from 'react';

const useServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const getServices = async () => {
    try {
      const response = await fetch('http://localhost:3000/services/api/get-all');
      const data = await response.json(); // Use response.json() to parse the response body
      setServices(data.data || []);
    } catch (error) {
      console.error('Error fetching services:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getServices();
  }, []);

  return { services, loading };
};

export default useServices;
