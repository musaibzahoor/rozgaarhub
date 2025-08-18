import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import employerRoutes from "./routes/employerRoutes.js";
dotenv.config();


const app = express();

// Middleware
app.use(express.json());
app.get("/", (req, res) => {
  res.json({ message: "Welcome to RozgaarHub API 🚀" });
});
// Routes

app.use("/api/employers", employerRoutes);

// DB Connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Function to auto-pick port
function startServer(port) {
  const server = app
    .listen(port, () => {
      console.log(`✅ Server running on port ${port}`);
    })
    .on("error", (err) => {
      if (err.code === "EADDRINUSE") {
        console.warn(`⚠️ Port ${port} in use, trying ${port + 1}...`);
        startServer(port + 1); // try next port
      } else {
        console.error("❌ Server error:", err);
      }
    });
}

const PORT = process.env.PORT || 5000;
startServer(PORT);
