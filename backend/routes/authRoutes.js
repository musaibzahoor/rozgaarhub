import express from "express";
import { 
  signup, 
  login, 
  registerWorker, 
  loginWorker, 
  registerEmployer, 
  loginEmployer 
} from "../controllers/authController.js";

const router = express.Router();

// General Auth
router.post("/signup", signup);
router.post("/login", login);

// Worker Auth
router.post("/worker/register", registerWorker);
router.post("/worker/login", loginWorker);

// Employer Auth
router.post("/employer/register", registerEmployer);
router.post("/employer/login", loginEmployer);

export default router;
