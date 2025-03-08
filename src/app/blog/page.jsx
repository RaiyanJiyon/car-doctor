"use client"
import PageCover from '@/components/shared/PageCover';
import Image from 'next/image';
import React from 'react';
import { useState } from 'react';

const blogs = [
    {
        "id": "1",
        "title": "The Ultimate Guide to Car Maintenance",
        "author": "Jane Doe",
        "date": "2025-03-07",
        "content": "Regular car maintenance is essential for keeping your vehicle in top condition. In this post, we cover the key aspects of car maintenance, including oil changes, tire rotations, and brake inspections.",
        "image": "/assets/images/services/1.jpg",
        "tags": ["Car Maintenance", "Auto Care", "Vehicle Tips"]
    },
    {
        "id": "2",
        "title": "How to Choose the Right Car Repair Shop",
        "author": "John Smith",
        "date": "2025-02-28",
        "content": "Finding a reliable car repair shop can be challenging. In this post, we provide tips on how to choose the right repair shop, what to look for in a mechanic, and questions to ask before getting your car serviced.",
        "image": "/assets/images/services/2.jpg",
        "tags": ["Car Repair", "Mechanic", "Auto Shop"]
    },
    {
        "id": "3",
        "title": "Understanding Your Car's Dashboard Warning Lights",
        "author": "Alice Johnson",
        "date": "2025-01-15",
        "content": "Dashboard warning lights can be confusing and alarming. In this blog post, we explain the meaning of common dashboard warning lights and what actions you should take when they appear.",
        "image": "/assets/images/services/3.jpg",
        "tags": ["Dashboard Lights", "Car Safety", "Vehicle Warnings"]
    },
    {
        "id": "4",
        "title": "The Benefits of Regular Oil Changes",
        "author": "Michael Brown",
        "date": "2025-03-01",
        "content": "Oil changes are one of the most important routine maintenance tasks for your car. This post discusses the benefits of regular oil changes, the different types of motor oil, and how often you should change your oil.",
        "image": "/assets/images/services/4.jpg",
        "tags": ["Oil Change", "Car Maintenance", "Engine Care"]
    },
    {
        "id": "5",
        "title": "Tips for Extending the Life of Your Tires",
        "author": "Emily Davis",
        "date": "2025-02-20",
        "content": "Proper tire care is crucial for safety and performance. In this post, we provide tips for extending the life of your tires, including proper inflation, rotation, alignment, and storage.",
        "image": "/assets/images/services/5.jpg",
        "tags": ["Tire Care", "Vehicle Safety", "Car Maintenance"]
    },
    {
        "id": "6",
        "title": "How to Winterize Your Vehicle",
        "author": "Chris Wilson",
        "date": "2025-03-05",
        "content": "Preparing your vehicle for winter is essential to ensure it runs smoothly in cold weather. In this post, we outline the steps to winterize your vehicle, including checking fluids, inspecting tires, and testing the battery.",
        "image": "/assets/images/services/6.jpg",
        "tags": ["Winterize Vehicle", "Cold Weather", "Car Care"]
    },
    {
        "id": "7",
        "title": "The Importance of Regular Brake Inspections",
        "author": "Rachel Green",
        "date": "2025-01-30",
        "content": "Brakes are a critical component of your vehicle's safety system. This post explains the importance of regular brake inspections, common signs of brake problems, and how to maintain your brakes.",
        "image": "/assets/images/services/1.jpg",
        "tags": ["Brake Inspection", "Vehicle Safety", "Car Maintenance"]
    },
    {
        "id": "8",
        "title": "How to Save Money on Car Repairs",
        "author": "David Lee",
        "date": "2025-02-25",
        "content": "Car repairs can be expensive, but there are ways to save money. In this post, we share tips for reducing car repair costs, including preventive maintenance, DIY repairs, and finding affordable parts.",
        "image": "/assets/images/services/2.jpg",
        "tags": ["Car Repairs", "Saving Money", "Auto Care"]
    },
    {
        "id": "9",
        "title": "The Pros and Cons of Synthetic Motor Oil",
        "author": "Sophia Martinez",
        "date": "2025-03-03",
        "content": "Synthetic motor oil offers several advantages over conventional oil, but it also has some drawbacks. This post explores the pros and cons of synthetic motor oil and helps you decide whether it's the right choice for your vehicle.",
        "image": "/assets/images/services/3.jpg",
        "tags": ["Synthetic Motor Oil", "Engine Care", "Car Maintenance"]
    },
    {
        "id": "10",
        "title": "A Beginner's Guide to Car Detailing",
        "author": "James Anderson",
        "date": "2025-02-15",
        "content": "Car detailing is more than just a wash and wax. This guide provides an overview of car detailing, including interior and exterior cleaning, polishing, and protecting your vehicle's finish.",
        "image": "/assets/images/services/4.jpg",
        "tags": ["Car Detailing", "Auto Care", "Vehicle Cleaning"]
    }
]


const BlogsPage = () => {
    return (
        <div className="w-11/12 max-w-screen-2xl mx-auto">
            <PageCover title="Blogs Page" prevPage="Services" nextPage="Contact" />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-20">
                {
                    blogs.map(blog => (
                        <div key={blog.id} className=" bg-white border border-gray-200 rounded-lg shadow-sm">
                            <div className=''>
                                <img className="rounded-t-lg w-full h-72" src={blog.image} alt={blog.title} />
                            </div>
                            <div className="p-5">
                                <div>
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{blog.title}</h5>
                                </div>
                                <p className="h-44 mb-3 font-normal text-gray-700">{blog.content}</p>
                                <button href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300">
                                    Read more
                                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default BlogsPage;