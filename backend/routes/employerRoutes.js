import express from "express";
import {
  getEmployers,
  getEmployerById,
  createEmployer,
  updateEmployer,
  deleteEmployer,
} from "../controllers/employerController.js";

const router = express.Router();

router.route("/").get(getEmployers).post(createEmployer);
router.route("/:id").get(getEmployerById).put(updateEmployer).delete(deleteEmployer);

export default router;
