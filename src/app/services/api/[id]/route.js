import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb"; // Required for ObjectId conversion

export const GET = async (request, { params }) => {
    try {
        // Validate and convert ID to ObjectId
        const serviceId = new ObjectId(params.id);
        
        const db = await connectDB();
        const service = await db.collection('services').findOne({ _id: serviceId });

        if (!service) {
            return NextResponse.json(
                { error: "Service not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(
            { data: service },
            { status: 200 }
        );
        
    } catch (error) {
        console.error('Error fetching service:', error.message);
        return NextResponse.json(
            { error: "Internal Server Error", details: error.message },
            { status: 500 }
        );
    }
}