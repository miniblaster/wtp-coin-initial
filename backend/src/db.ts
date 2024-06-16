import mongoose from "mongoose";

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/WTP");

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
