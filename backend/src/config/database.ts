import mongoose from "mongoose"

export const connectDB = async() => {
    try {

 const mongoUri = process.env.MONGODB_URI;
   omitUndefined(! )       
       await mongoose.connect(process.env.MONGODB_URI as string)
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error)
        throw error
    }
}