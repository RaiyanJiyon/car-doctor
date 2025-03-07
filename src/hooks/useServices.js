"use client";

import { useState, useEffect } from 'react';

const useServices = () => {
  const [services, setServices] = useState([]);
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [serviceLoading, setServiceLoading] = useState(false);

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

  const getServiceById = async (id) => {
    setServiceLoading(true);
    try {
      const response = await fetch(`http://localhost:3000/services/api/get/${id}`);
      const data = await response.json(); // Use response.json() to parse the response body
      setService(data.data || null);
    } catch (error) {
      console.error(`Error fetching service with ID ${id}:`, error);
    } finally {
      setServiceLoading(false);
    }
  };

  useEffect(() => {
    getServices();
  }, []);

  return { services, loading, service, serviceLoading, getServiceById };
};

export default useServices;
