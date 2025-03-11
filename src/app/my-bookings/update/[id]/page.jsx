"use client";

import ErrorToaster from "@/components/shared/toaster/ErrorToaster";
import SuccessToaster from "@/components/shared/toaster/SuccessToaster";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const UpdateBookingPage = ({ params: paramsPromise }) => {
    const { data: session, status } = useSession();
    const router = useRouter();
    const params = use(paramsPromise);
    const { id } = params;  // Extract id from params
    console.log(id);

    const [booking, setBooking] = useState(null);

    // Initialize useForm with defaultValues
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            phone: "",
            message: ""
        }
    });

    // Fetch Booking Data
    const getBooking = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/my-bookings/api/booking/${id}`);
            const data = await response.json();
            setBooking(data.data);
        } catch (error) {
            console.error("Fetch error:", error.message);
        }
    };

    useEffect(() => {
        getBooking();
    }, []);

    // Reset form when booking data is loaded
    useEffect(() => {
        if (booking) {
            reset({
                firstName: booking.firstName || "",
                lastName: booking.lastName || "",
                phone: booking.phone || "",
                message: booking.message || "",
            });
        }
    }, [booking, reset]);

    // Form Submit Handler
    const onSubmit = async (data) => {
        console.log("Submitting data:", data);
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/my-bookings/api/booking/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    ...data,
                    email: session?.user?.email
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Update failed");
            }

            SuccessToaster("Booking updated successfully");
            router.push(`${process.env.NEXT_PUBLIC_BASE_URL}/my-bookings`)
            reset({}, { keepErrors: false }); // Clear form and errors after success

        } catch (error) {
            console.error("Update error:", error);
            ErrorToaster(error.message || "Failed to update booking");
        }
    };

    // Redirect if not authenticated
    if (status === "loading") return <div>Loading...</div>;
    if (status === "unauthenticated") {
        router.push("/login");
        return null;
    }

    return (
        <div className="w-11/12 max-w-screen-2xl mx-auto">
            <div className="bg-[#F3F3F3] md:p-10 my-28">
                <div className="w-full p-8 rounded-lg">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <input
                                    {...register("firstName", { required: "First name is required" })}
                                    type="text"
                                    placeholder="First Name"
                                    className="w-full p-3 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
                                />
                                {errors.firstName && <span className="text-red-500">{errors.firstName.message}</span>}
                            </div>
                            <div>
                                <input
                                    {...register("lastName", { required: "Last name is required" })}
                                    type="text"
                                    placeholder="Last Name"
                                    className="w-full p-3 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
                                />
                                {errors.lastName && <span className="text-red-500">{errors.lastName.message}</span>}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <input
                                    {...register("phone", {
                                        required: "Phone number is required",
                                        pattern: {
                                            value: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/i,
                                            message: "Invalid phone number"
                                        }
                                    })}
                                    type="tel"
                                    placeholder="Your Phone"
                                    className="w-full p-3 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
                                />
                                {errors.phone && <span className="text-red-500">{errors.phone.message}</span>}
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full p-3 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
                                    value={session?.user?.email || ""}
                                    readOnly
                                />
                            </div>
                        </div>

                        <div>
                            <textarea
                                {...register("message", { required: "Message is required" })}
                                placeholder="Your Message"
                                rows="4"
                                className="w-full p-3 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
                            />
                            {errors.message && <span className="text-red-500">{errors.message}</span>}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-primary text-white py-3 rounded-lg text-lg font-semibold hover:bg-red-600 transition duration-200"
                        >
                            Update Order
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateBookingPage;
