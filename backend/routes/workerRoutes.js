// // backend/routes/workerRoutes.js
// import express from "express";
// import { getWorkers, createWorker } from "../controllers/workerController.js";

// const router = express.Router();

// router.get("/", getWorkers);   // GET /api/workers
// router.post("/", createWorker); // POST /api/workers

// export default router;


import mongoose from 'mongoose';

const WorkerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  transport: { type: Boolean, default: false },
  location: { type: String, required: true },
  skill: { type: String, required: true }
});

const Worker = mongoose.model('Worker', WorkerSchema);

export default Worker;  // ✅ default export
