import express from "express";
import { postJob, getJobs } from "../controllers/jobController.js";

const router = express.Router();

router.post("/", postJob);
router.get("/", getJobs);

export default router;
