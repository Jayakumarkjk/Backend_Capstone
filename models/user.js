import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    folderName: {
      type: String,
    },
    version: {
      type: String,
    },
    profile: {
      type: String,
    },
  },
  { timestamps: true }
);

const userModel = mongoose.model("users", userSchema);
export default userModel;
