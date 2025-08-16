import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  skillRequired: String,
  budget: Number,
  employer: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  worker: { type: mongoose.Schema.Types.ObjectId, ref: "Worker" },
  transportRequired: { type: Boolean, default: false },
  status: { type: String, enum: ["open", "assigned", "completed"], default: "open" },
});

export default mongoose.model("Job", jobSchema);

