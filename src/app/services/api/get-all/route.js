import { NextResponse } from "next/server";
import { connectDB } from "@/lib/connectDB";

export const GET = async () => {
    try {
        // Properly await database connection
        const db = await connectDB();
        const servicesCollection = db.collection('services');
        
        // Convert cursor to array and get documents
        const services = await servicesCollection.find().toArray();
        
        return NextResponse.json({
            message: 'Successfully retrieved all services data',
            data: services, // Actual service data
            count: services.length // Number of documents retrieved
        }, { status: 200 });

    } catch (error) {
        console.error('Error fetching services:', error.message);
        return NextResponse.json({
            error: 'Failed to retrieve services data',
            details: error.message
        }, { status: 500 });
    }
}