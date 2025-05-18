
import mongoose from "mongoose";
import dotenv from "dotenv";
import Event from "./models/Event";

dotenv.config();

const dbUrl = process.env.DB_URL as string;

const seed = async () => {
  try {
    await mongoose.connect(dbUrl, { dbName: "rsvp-app" });
    console.log("MongoDB connected");

    // Clear existing data
    await Event.deleteMany();

    // Insert sample events
    await Event.insertMany([
      {
        title: "React Conference",
        description: "Learn about React 19",
        date: Date.now(),
      },
      {
        title: "Node.js Meetup",
        description: "Backend talks and networking",
        date: Date.now(),
      },
    ]);

    console.log("✅ Seeding complete");
    process.exit(0);
  } catch (error) {
    console.error("❌ Seeding failed:", error);
    process.exit(1);
  }
};

seed();

