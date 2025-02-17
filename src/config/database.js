import "dotenv/config";
import mongoose from "mongoose";

const databaseConnection = async () => {
  try {
    if (process.env.NODE_ENV !== "test") {
      await mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("MongoDB Connected...");
    }
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
    process.exit(1);
  }
};

export default databaseConnection;
export { mongoose };
