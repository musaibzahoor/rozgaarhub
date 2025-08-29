// 



import express from "express";
import { postJob, getJobs, applyToJob } from "../controllers/jobController.js";

const router = express.Router();

router.post("/", postJob);
router.get("/", getJobs);

// New route for job applications
router.post("/:id/apply", applyToJob);

export default router;
