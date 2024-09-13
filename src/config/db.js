import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        console.log("connecting to database...");
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: "wacanastore",
            }
        );
        console.log("Database Connected Succesfully");
    } catch (error) {
        console.error("Error Connecting to Database: ", error)
        process.exit(1);
    }
};