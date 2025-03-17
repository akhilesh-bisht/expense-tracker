import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./db/connection.js";
import router from "./routes/route.js";
import userRoute from "./routes/user.route.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(
  cors({
    origin: "https://expense-tracker-1-wd74.onrender.com",
    credentials: true, // Allow cookies
  })
);

// ✅ Middleware
app.use(express.json());
app.use(cookieParser()); // Required to read cookies

// ✅ Use routes
app.use("/api", router);
app.use("/api/user", userRoute);

// ✅ MongoDB connection & start server
const startServer = async () => {
  try {
    await connectDB();
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
