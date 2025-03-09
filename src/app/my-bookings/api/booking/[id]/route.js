import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  try {
    // 1. Validate ID format
    if (!ObjectId.isValid(params.id)) {
      return NextResponse.json(
        { error: "Invalid booking ID format" },
        { status: 400 }
      );
    }

    const bookingId = new ObjectId(params.id);
    const db = await connectDB();
    const booking = await db.collection("bookings").findOne({ _id: bookingId });

    // 2. Handle not found case
    if (!booking) {
      return NextResponse.json(
        { error: "Booking not found" },
        { status: 404 }
      );
    }

    // 3. Return valid response
    return NextResponse.json(
      {
        success: true,
        data: booking // Return actual booking data
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('GET error:', error.message);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch booking",
        details: error.message,
      },
      { status: 500 }
    );
  }
}

export const PATCH = async (request, { params }) => {
    try {
        // 1. Validate ID format
        if (!ObjectId.isValid(params.id)) {
            return NextResponse.json(
                { error: "Invalid booking ID format" },
                { status: 400 }
            );
        }

        // 2. Get request body
        const body = await request.json();
        const {
            firstName,
            lastName,
            phone,
            message
        } = body;

        // 3. Validate required fields
        if (!firstName && !lastName && !phone && !message) {
            return NextResponse.json(
                { error: "No valid fields to update" },
                { status: 400 }
            );
        }

        // 4. Create update object with allowed fields
        const update = {};
        if (firstName) update.firstName = firstName;
        if (lastName) update.lastName = lastName;
        if (phone) update.phone = phone;
        if (message) update.message = message;

        // 5. Connect to database
        const db = await connectDB();
        const result = await db.collection("bookings").updateOne(
            { _id: new ObjectId(params.id) },
            { $set: update }
        );

        // 6. Check if document was found
        if (result.matchedCount === 0) {
            return NextResponse.json(
                { error: "Booking not found" },
                { status: 404 }
            );
        }

        // 7. Return updated document
        const updatedBooking = await db.collection("bookings")
            .findOne({ _id: new ObjectId(params.id) });

        return NextResponse.json(
            {
                success: true,
                message: "Booking updated successfully",
                data: updatedBooking
            },
            { status: 200 }
        );

    } catch (error) {
        console.error('PATCH error:', error.message);
        return NextResponse.json(
            {
                success: false,
                error: "Failed to update booking",
                details: error.message,
            },
            { status: 500 }
        );
    }
}

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
