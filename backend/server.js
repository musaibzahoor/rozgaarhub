// server.js
import express from "express";
import cors from "cors";







const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // to parse JSON request body

// Dummy data (in-memory for now)
let workers = [
  { id: 1, name: "John Doe", skill: "Plumber" },
  { id: 2, name: "Ali Khan", skill: "Electrician" },
];

// Routes
// Home route
app.get("/", (req, res) => {
  res.send("RozgaarHub API is running 🚀");
});

// Get all workers
app.get("/api/workers", (req, res) => {
  res.json(workers);
});

// Add a new worker
app.post("/api/workers", (req, res) => {
  const { name, skill } = req.body;

  if (!name || !skill) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const newWorker = {
    id: workers.length + 1,
    name,
    skill,
  };

  workers.push(newWorker);
  res.status(201).json(newWorker);
});

// Update a worker (PUT)
app.put("/api/workers/:id", (req, res) => {
  const { id } = req.params;
  const { name, skill } = req.body;

  const worker = workers.find((w) => w.id === parseInt(id));
  if (!worker) {
    return res.status(404).json({ message: "Worker not found" });
  }

  if (!name || !skill) {
    return res.status(400).json({ message: "All fields are required" });
  }

  worker.name = name;
  worker.skill = skill;

  res.json(worker);
});

// Delete a worker
app.delete("/api/workers/:id", (req, res) => {
  const { id } = req.params;
  const index = workers.findIndex((w) => w.id === parseInt(id));

  if (index === -1) {
    return res.status(404).json({ message: "Worker not found" });
  }

  const deletedWorker = workers.splice(index, 1);
  res.json({ message: "Worker deleted", worker: deletedWorker[0] });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});




