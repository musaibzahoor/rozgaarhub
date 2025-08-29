import Job from "../models/Job.js";

export const createJob = async (req, res) => {
  try {
    const job = await Job.create({ ...req.body, employerId: req.user.id });
    res.status(201).json(job);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getJobs = async (req, res) => {
  try {
    const jobs = await Job.findAll();
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  } 
};
