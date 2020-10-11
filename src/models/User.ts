import mongoose from "mongoose";

const signMethods = ["Google", "Password", "Passwordless"] as const;
type SignMethods = typeof signMethods[number];

export type UserType = {
  _id: string;
  username: string;
  email: string;
  password?: string; // Optional, cause on fetch we dont recieve pass.
  verified: boolean;
  signMethods: SignMethods[];
};

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username required"],
  },
  email: {
    type: String,
    required: [true, "Email required"],
    unique: true,
  },
  password: {
    type: String,
  },
  verified: {
    type: Boolean,
    required: [true, "Verified status is required"],
  },
  signMethods: {
    type: [
      {
        type: String,
        enum: signMethods,
      },
    ],
    required: [true, "At least one sign methods must be provided"],
  },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
