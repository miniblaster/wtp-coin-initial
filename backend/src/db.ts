import mongoose from "mongoose";
import config from "./config/config";

// Connect to MongoDB
mongoose.connect(config.connectionString || "");

const db = mongoose.connection;

export async function connectToDatabase() {
  try {
    db.on("error", console.error.bind(console, "MongoDB connection error:"));
    db.once("open", () => {
      console.log("Connected to MongoDB");
    });
  } catch (err) {
    console.error("Error connecting to MongoDB database", err);
    throw err;
  }
}
