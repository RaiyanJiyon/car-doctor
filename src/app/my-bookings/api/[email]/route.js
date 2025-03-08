import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async (request) => {
    try {
        // 1. Get email from query parameters
        const email = request.nextUrl.searchParams.get('email');
        
        // 2. Validate email format
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return NextResponse.json(
                { error: "Invalid or missing email parameter" },
                { status: 400 }
            );
        }

        // 3. Connect to database
        const db = await connectDB();
        const bookingsCollection = db.collection('bookings');

        // 4. Find bookings with proper query
        const bookings = await bookingsCollection.find({ email }).toArray();

        // 5. Return appropriate response
        return NextResponse.json({
            success: true,
            data: bookings,
            count: bookings.length
        }, { status: 200 });

    } catch (error) {
        // 6. Handle errors properly
        console.error('Error fetching bookings:', error.message);
        return NextResponse.json({
            success: false,
            error: "Failed to retrieve bookings",
            details: error.message
        }, { status: 500 });
    }
}