import dotenv from "dotenv"
import mongoose from "mongoose";

dotenv.config()
const dbUrl = process.env.DB_URL as string;

const connectDB = async () => {
  try {
    const DB_OPTIONS: mongoose.ConnectOptions = {
      dbName: "rsvp-app",
    }
    console.log("Connecting to DB ....");
    await mongoose.connect(dbUrl, DB_OPTIONS);
    console.log('Connected Successfully!!');
  } catch (err) {
    console.log(err)
  }
}

export default connectDB;


