import { connectDB } from "@/lib/connectDB";
import { services } from "@/lib/services"; // Fixed typo in import path
import { NextResponse } from "next/server";

export const GET = async () => { // Changed to GET method
    try {
        const db = await connectDB();
        const servicesCollection = db.collection("services");

        // Clear existing data with proper empty filter
        await servicesCollection.deleteMany({});
        
        // Insert new data
        const result = await servicesCollection.insertMany(services);
        
        return NextResponse.json({
            message: 'Seed successful',
            insertedCount: result.insertedCount
        }, { status: 200 });

    } catch (error) {
        console.error('Seeding error:', error.message);
        return NextResponse.json({
            error: 'Failed to seed database',
            details: error.message
        }, { status: 500 });
    }
}