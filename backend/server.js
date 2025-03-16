import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db/connection.js";
import router from "./routes/route.js";

const app = express();
dotenv.config();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Use routes
app.use(router);

// MongoDB connection & start server
const startServer = async () => {
  try {
    await connectDB(); // Ensure MongoDB connection is established before starting the server
    console.log("Connected to MongoDB");

    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error(`MongoDB Connection Failed: ${error}`);
    process.exit(1);
  }
};

startServer();
