"use client";

import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ErrorToaster from "@/components/shared/toaster/ErrorToaster";
import SuccessToaster from "@/components/shared/toaster/SuccessToaster";
import Link from "next/link";

const BookingsPage = () => {
    const { data: session, status } = useSession();
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const router = useRouter();

    const fetchBookings = async () => {
        try {
            setLoading(true);
            const response = await fetch(
                `http://localhost:3000/my-bookings/api/bookings?email=${encodeURIComponent(
                    session.user.email
                )}`
            );

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Failed to fetch bookings");
            }

            const data = await response.json();
            setBookings(data.data || []);
            setError(null);
        } catch (err) {
            setError(err.message);
            console.error("Error fetching bookings:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/login");
        }

        if (status === "authenticated") {
            fetchBookings();
        }
    }, [status]);

    if (status === "loading" || loading) {
        return <div className="p-8 text-center">Loading...</div>;
    }

    const handleCancelBooking = async (id) => {
        try {
            const response = await fetch(
                `http://localhost:3000/my-bookings/api/booking/${id}`,
                {
                    method: "DELETE",
                }
            );

            if (!response.ok) {
                const errorData = await response.json();
                ErrorToaster(errorData || "Failed to cancel booking data");
            }

            SuccessToaster("Booking canceled successfully");
            fetchBookings();
        } catch (error) {
            console.error(error.message);
            ErrorToaster(error.message);
        }
    };

    if (error) {
        return (
            <div className="p-8 text-center text-red-500">
                Error: {error}
                <button
                    className="ml-4 text-blue-500 hover:underline"
                    onClick={fetchBookings}
                >
                    Retry
                </button>
            </div>
        );
    }

    return (
        <div className="w-11/12 max-w-screen-2xl mx-auto p-8">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500">
                    <caption className="p-5 text-lg font-semibold text-gray-900 bg-white">
                        My Bookings
                        <p className="mt-1 text-sm font-normal text-gray-500">
                            Manage your service bookings and appointments
                        </p>
                    </caption>
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                First Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Last Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Phone Number
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((booking) => (
                            <tr
                                key={booking._id}
                                className="bg-white border-b hover:bg-gray-50"
                            >
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                >
                                    {booking.firstName}
                                </th>
                                <td className="px-6 py-4">{booking.lastName}</td>
                                <td className="px-6 py-4">{booking.email}</td>
                                <td className="px-6 py-4">{booking.phone}</td>
                                <td className="px-6 py-4 flex gap-4">
                                    <Link href={`my-bookings/update/${booking._id}`}>
                                        <button className="text-green-500 hover:underline">
                                            Edit
                                        </button>
                                    </Link>
                                    <button
                                        onClick={() => handleCancelBooking(booking._id)}
                                        className="text-red-500 hover:underline"
                                    >
                                        Cancel
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BookingsPage;
