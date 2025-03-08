import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const DELETE = async (request, { params }) => {
  try {
    // Validate ID format
    if (!ObjectId.isValid(params.id)) {
      return NextResponse.json(
        { error: "Invalid booking ID format" },
        { status: 400 }
      );
    }

    const bookingId = new ObjectId(params.id);
    const db = await connectDB();
    const bookingsCollection = db.collection("bookings"); // Added collection name

    const result = await bookingsCollection.deleteOne({ _id: bookingId });

    if (result.deletedCount === 0) {
      return NextResponse.json({ error: "Booking not found" }, { status: 404 });
    }

    return NextResponse.json(
      {
        success: true,
        message: "Booking deleted successfully",
        deletedCount: result.deletedCount,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("DELETE error:", error.message);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to delete booking",
        details: error.message,
      },
      { status: 500 }
    );
  }
};
