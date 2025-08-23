
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import sequelize from "./config/db.js";

// Routes
import authRoutes from "./routes/authRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";
import workerRoutes from "./routes/workerRoutes.js";
import employerRoutes from "./routes/employerRoutes.js";

dotenv.config();
const app = express();

// ---------- Middleware ----------
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // optional for form-data

// ---------- Routes ----------
app.get("/", (req, res) => res.send("API running...")); // ✅ Keep test route on top
app.use("/api/auth", authRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/workers", workerRoutes);
app.use("/api/employers", employerRoutes); // ✅ moved here with other routes

// ---------- Database + Server ----------
sequelize
  .sync()
  .then(() => {
    console.log("Database connected and synced");
    app.listen(5000, () => console.log("Server running on port 5000"));
  })
  .catch((err) => {
    console.error("Database connection failed:", err);
  });
