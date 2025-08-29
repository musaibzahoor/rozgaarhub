// 

import Job from "../models/Job.js";
import sendSMS from "../utils/sendSMS.js"; // helper for SMS

export const postJob = async (req, res) => {
  try {
    const job = new Job(req.body);
    await job.save();
    res.status(201).json(job);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find().populate("employer worker");
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// NEW: Apply to a job
export const applyToJob = async (req, res) => {
  try {
    const { name, phone, note } = req.body;
    const jobId = req.params.id;

    const job = await Job.findById(jobId).populate("employer");
    if (!job) return res.status(404).json({ message: "Job not found" });

    // Create the message text
    const message = `${name} applied for ${job.employer.name}'s job post as a ${job.category}`;

    // Send SMS to your number (or employer’s phone if you want)
    await sendSMS(process.env.MY_PHONE, message);

    res.json({ success: true, message: "Application submitted & SMS sent" });
  } catch (error) {
    console.error("ApplyToJob Error:", error);
    res.status(500).json({ error: error.message });
  }
};
