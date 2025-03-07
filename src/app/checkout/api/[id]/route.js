import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    try {
        // Parse request body
        const newBooking = await request.json();

        // Validate required fields
        if (!newBooking.serviceId || !newBooking.email) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // Connect to database
        const db = await connectDB();
        const bookingsCollection = db.collection('bookings');

        // Insert document
        const result = await bookingsCollection.insertOne(newBooking);

        // Return proper response
        return NextResponse.json(
            {
                message: 'Booking created successfully',
                bookingId: result.insertedId.toString()
            },
            { status: 201 }
        );

    } catch (error) {
        // Handle errors properly
        console.error('Booking error:', error.message);
        return NextResponse.json(
            {
                error: 'Failed to create booking',
                details: error.message
            },
            { status: 500 }
        );
    }
}