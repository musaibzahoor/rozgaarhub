// // backend/routes/employerRoutes.js
// import express from "express";
// import Employer from "../models/Employer.js";

// const router = express.Router();

// // @route   POST /api/employers
// // @desc    Create employer
// router.post("/", async (req, res) => {
//   try {
//     const { name, company, phone } = req.body;
//     const employer = await Employer.create({ name, company, phone });
//     res.status(201).json(employer);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Failed to create employer" });
//   }
// });

// // @route   GET /api/employers
// // @desc    Get all employers
// router.get("/", async (req, res) => {
//   try {
//     const employers = await Employer.findAll();
//     res.json(employers);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Failed to fetch employers" });
//   }
// });

// // @route   GET /api/employers/:id
// // @desc    Get single employer by ID
// router.get("/:id", async (req, res) => {
//   try {
//     const employer = await Employer.findByPk(req.params.id);
//     if (!employer) {
//       return res.status(404).json({ error: "Employer not found" });
//     }
//     res.json(employer);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Failed to fetch employer" });
//   }
// });

// export default router;
import express from "express";
import Employer from "../models/Employer.js";

const router = express.Router();

// Create Employer
router.post("/", async (req, res) => {
  try {
    const { name, email, company } = req.body;
    const employer = await Employer.create({ name, email, company });
    res.status(201).json(employer);
  } catch (error) {
    console.error("Error creating employer:", error);
    res.status(500).json({ error: "Failed to create employer" });
  }
});

// Get all Employers
router.get("/", async (req, res) => {
  try {
    const employers = await Employer.findAll();
    res.json(employers);
  } catch (error) {
    console.error("Error fetching employers:", error);
    res.status(500).json({ error: "Failed to fetch employers" });
  }
});

// Get Employer by ID
router.get("/:id", async (req, res) => {
  try {
    const employer = await Employer.findByPk(req.params.id);
    if (!employer) return res.status(404).json({ error: "Employer not found" });
    res.json(employer);
  } catch (error) {
    console.error("Error fetching employer:", error);
    res.status(500).json({ error: "Failed to fetch employer" });
  }
});

// Update Employer
router.put("/:id", async (req, res) => {
  try {
    const employer = await Employer.findByPk(req.params.id);
    if (!employer) return res.status(404).json({ error: "Employer not found" });

    await employer.update(req.body);
    res.json(employer);
  } catch (error) {
    console.error("Error updating employer:", error);
    res.status(500).json({ error: "Failed to update employer" });
  }
});

// Delete Employer
router.delete("/:id", async (req, res) => {
  try {
    const employer = await Employer.findByPk(req.params.id);
    if (!employer) return res.status(404).json({ error: "Employer not found" });

    await employer.destroy();
    res.json({ message: "Employer deleted successfully" });
  } catch (error) {
    console.error("Error deleting employer:", error);
    res.status(500).json({ error: "Failed to delete employer" });
  }
});

export default router;
