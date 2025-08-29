// // backend/routes/jobRoutes.js
// const express = require("express");
// const router = express.Router();
// const authMiddleware = require("../middleware/authMiddleware");

// // Example protected route
// router.get("/", authMiddleware, (req, res) => {
//   res.json({
//     message: "Welcome to the protected Jobs route 🚀",
//     user: req.user,
//   });
// });

// module.exports = router;


// import express from "express";
// import authMiddleware from "../middleware/authMiddleware.js";

// const router = express.Router();

// router.get("/", authMiddleware, (req, res) => {
//   res.json({
//     message: "Welcome to the protected Jobs route 🚀",
//     user: req.user,
//   });
// });

// export default router;



import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import { createJob, getJobs } from "../controllers/jobController.js";

const router = express.Router();

// Public or protected GET
router.get("/", authMiddleware, getJobs);

// Protected POST (only logged-in users can create jobs)
router.post("/", authMiddleware, createJob);

export default router;
