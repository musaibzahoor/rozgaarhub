import Worker from "../models/Worker.js";

// Create Worker
export const createWorker = async (req, res) => {
  try {
    const { name, skill, phone } = req.body;

    if (!name || !skill || !phone) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const worker = await Worker.create({ name, skill, phone });
    res.status(201).json(worker);
  } catch (error) {
    console.error("Error creating worker:", error);
    res.status(500).json({ error: "Failed to create worker" });
  }
};

// Get All Workers
export const getWorkers = async (req, res) => {
  try {
    const workers = await Worker.findAll();
    res.json(workers);
  } catch (error) {
    console.error("Error fetching workers:", error);
    res.status(500).json({ error: "Failed to fetch workers" });
  }
};
