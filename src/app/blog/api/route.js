import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        const db = await connectDB();
        const blogsCollection = db.collection('blogs');
        const blogs = await blogsCollection.find().toArray();

        return NextResponse.json({
            success: true,
            data: blogs,
            count: blogs.length
        }, { status: 200 });

    } catch (error) {
        console.error('Error fetching blogs:', error.message);
        return NextResponse.json({
            success: false,
            error: 'Failed to retrieve blogs',
            details: error.message
        }, { status: 500 });
    }
}