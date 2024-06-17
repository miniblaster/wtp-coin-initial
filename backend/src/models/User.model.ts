import mongoose, { Schema } from "mongoose";
import { UserType } from "src/types/user.type";

// Define the Mongoose schema for the User collection
const UserSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    country: { type: String, required: true },
    currency: { type: String, required: true },
    title: { type: String },
    bio: { type: String },
    expertise: [{ type: String }],
    skills: [{ type: String }],
    photo: { type: String },
    isPublic: { type: Boolean, default: true },
  },
  { timestamps: true }
);

// Create and export the User model
const UserModel = mongoose.model<UserType>("User", UserSchema);

export default UserModel;
