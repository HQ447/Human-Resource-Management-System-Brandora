import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connect_DB = async () => {
  try {
    mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.log("Error in COnnecting Database ", error);
  }
};

export default connect_DB;
