import Employer from "../models/employerModel.js";

// Get all employers
export const getEmployers = async (req, res) => {
  try {
    const employers = await Employer.find();
    res.status(200).json(employers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get employer by ID
export const getEmployerById = async (req, res) => {
  try {
    const employer = await Employer.findById(req.params.id);
    if (!employer) {
      return res.status(404).json({ message: "Employer not found" });
    }
    res.status(200).json(employer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new employer
export const createEmployer = async (req, res) => {
  try {
    const { name, email, phone, company, location } = req.body;

    if (!name || !email || !phone || !company || !location) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const employer = new Employer({
      name,
      email,
      phone,
      company,
      location,
    });

    const savedEmployer = await employer.save();
    res.status(201).json(savedEmployer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update employer
export const updateEmployer = async (req, res) => {
  try {
    const employer = await Employer.findById(req.params.id);
    if (!employer) {
      return res.status(404).json({ message: "Employer not found" });
    }

    const { name, email, phone, company, location } = req.body;

    employer.name = name || employer.name;
    employer.email = email || employer.email;
    employer.phone = phone || employer.phone;
    employer.company = company || employer.company;
    employer.location = location || employer.location;

    const updatedEmployer = await employer.save();
    res.status(200).json(updatedEmployer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete employer
export const deleteEmployer = async (req, res) => {
  try {
    const employer = await Employer.findById(req.params.id);
    if (!employer) {
      return res.status(404).json({ message: "Employer not found" });
    }

    await employer.remove();
    res.status(200).json({ message: "Employer deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
