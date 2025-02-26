import { connectDB } from "@/lib/connectDB";
import bcrypt from "bcrypt";

export const POST = async (request) => {
    const newUser = await request.json();

    try {
        const db = await connectDB();
        const userCollection = db.collection('users');

        // Check if the user already exists in the database
        const existingUser = await userCollection.findOne({ email: newUser.email });

        if (existingUser) {
            return new Response(JSON.stringify({ message: 'User already exists' }), { status: 409 });
        }

        const hashPassword = bcrypt.hashSync(newUser.password, 14);

        // Insert the new user into the database
        const response = await userCollection.insertOne({...newUser, password: hashPassword});
        return new Response(JSON.stringify({ message: 'New user added', data: response }), { status: 201 });

    } catch (error) {
        // Log and return any internal server errors
        console.error('Internal server issue:', error.message);
        return new Response(JSON.stringify({ message: 'Internal server issue' }), { status: 500 });
    }
};
