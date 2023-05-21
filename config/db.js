import mongoose from "mongoose";

const connectToDb = async () => {
  try {
    const res = await mongoose.connect(
      "mongodb+srv://jkpdesigns22:Jaydb@cluster0.uctkgot.mongodb.net/fileupload?retryWrites=true&w=majority"
    );
    if (res) {
      console.log("connected succesfuly");
    }
  } catch (error) {
    console.log(error);
  }
};

export default connectToDb;
