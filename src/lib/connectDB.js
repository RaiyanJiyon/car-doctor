import { MongoClient, ServerApiVersion } from 'mongodb';

let db;

export const connectDB = async () => {
    // Check if the database connection already exists
    if (db) {
        return db;
    }

    try {
        // Fetch the MongoDB URI from environment variables
        const uri = process.env.NEXT_PUBLIC_MONGODB_URI;

        // Check if the URI is defined
        if (!uri) {
            throw new Error('Please define the NEXT_PUBLIC_MONGODB_URI environment variable');
        }

        // Create a new MongoClient instance with specific server API options
        const client = new MongoClient(uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        });

        // Connect to the MongoDB client and assign the database
        await client.connect();
        db = client.db('car-doctor');
        console.log("Connected to db");
        return db;

    } catch (error) {
        // Log any connection errors
        console.error('Failed to connect to MongoDB:', error.message);
        throw error;
    }
};
