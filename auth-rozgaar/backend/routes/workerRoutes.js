import express from "express";
import Worker from "../models/Worker.js";

const router = express.Router();

// Create a new worker
router.post("/", async (req, res) => {
  try {
    const { name, skill, phone } = req.body;
    if (!name || !skill || !phone) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newWorker = await Worker.create({ name, skill, phone });
    res.status(201).json(newWorker);
  } catch (error) {
    console.error("Error creating worker:", error);
    res.status(500).json({ error: "Failed to create worker" });
  }
});

// Get all workers
router.get("/", async (req, res) => {
  try {
    const workers = await Worker.findAll();
    res.json(workers);
  } catch (error) {
    console.error("Error fetching workers:", error);
    res.status(500).json({ error: "Failed to fetch workers" });
  }
});

export default router;  // 👈 important
