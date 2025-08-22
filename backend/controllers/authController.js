import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Worker, Employer } from "../models/index.js";

export const signup = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ name, email, password: hashedPassword, role });
    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.json({ token, user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
 const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Worker = require("../models/Worker");
const Employer = require("../models/Employer");

const JWT_SECRET = "rozgaarhub_secret"; // later move to env

// Register Worker
exports.registerWorker = async (req, res) => {
  try {
    const { name, skill, location, transportAvailable, password } = req.body;

    if (!name || !skill || !location || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const worker = await Worker.create({
      name,
      skill,
      location,
      transportAvailable,
      password: hashedPassword,
    });

    res.status(201).json({ message: "Worker registered", worker });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Login Worker
exports.loginWorker = async (req, res) => {
  try {
    const { name, password } = req.body;

    const worker = await Worker.findOne({ where: { name } });
    if (!worker) return res.status(404).json({ message: "Worker not found" });

    const isMatch = await bcrypt.compare(password, worker.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: worker.id, role: "worker" }, JWT_SECRET, { expiresIn: "1h" });

    res.json({ token, worker });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Similar functions for Employer
exports.registerEmployer = async (req, res) => {
  try {
    const { name, company, location, password } = req.body;

    if (!name || !company || !location || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const employer = await Employer.create({
      name,
      company,
      location,
      password: hashedPassword,
    });

    res.status(201).json({ message: "Employer registered", employer });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.loginEmployer = async (req, res) => {
  try {
    const { name, password } = req.body;

    const employer = await Employer.findOne({ where: { name } });
    if (!employer) return res.status(404).json({ message: "Employer not found" });

    const isMatch = await bcrypt.compare(password, employer.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: employer.id, role: "employer" }, JWT_SECRET, { expiresIn: "1h" });

    res.json({ token, employer });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Worker = require("../models/Worker");
const Employer = require("../models/Employer");

const JWT_SECRET = "rozgaarhub_secret"; // later move to env

// Register Worker
exports.registerWorker = async (req, res) => {
  try {
    const { name, skill, location, transportAvailable, password } = req.body;

    if (!name || !skill || !location || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const worker = await Worker.create({
      name,
      skill,
      location,
      transportAvailable,
      password: hashedPassword,
    });

    res.status(201).json({ message: "Worker registered", worker });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Login Worker
exports.loginWorker = async (req, res) => {
  try {
    const { name, password } = req.body;

    const worker = await Worker.findOne({ where: { name } });
    if (!worker) return res.status(404).json({ message: "Worker not found" });

    const isMatch = await bcrypt.compare(password, worker.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: worker.id, role: "worker" }, JWT_SECRET, { expiresIn: "1h" });

    res.json({ token, worker });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Similar functions for Employer
exports.registerEmployer = async (req, res) => {
  try {
    const { name, company, location, password } = req.body;

    if (!name || !company || !location || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const employer = await Employer.create({
      name,
      company,
      location,
      password: hashedPassword,
    });

    res.status(201).json({ message: "Employer registered", employer });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.loginEmployer = async (req, res) => {
  try {
    const { name, password } = req.body;

    const employer = await Employer.findOne({ where: { name } });
    if (!employer) return res.status(404).json({ message: "Employer not found" });

    const isMatch = await bcrypt.compare(password, employer.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: employer.id, role: "employer" }, JWT_SECRET, { expiresIn: "1h" });

    res.json({ token, employer });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Worker = require("../models/Worker");
const Employer = require("../models/Employer");

const JWT_SECRET = "rozgaarhub_secret"; // later move to env

// Register Worker
exports.registerWorker = async (req, res) => {
  try {
    const { name, skill, location, transportAvailable, password } = req.body;

    if (!name || !skill || !location || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const worker = await Worker.create({
      name,
      skill,
      location,
      transportAvailable,
      password: hashedPassword,
    });

    res.status(201).json({ message: "Worker registered", worker });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Login Worker
exports.loginWorker = async (req, res) => {
  try {
    const { name, password } = req.body;

    const worker = await Worker.findOne({ where: { name } });
    if (!worker) return res.status(404).json({ message: "Worker not found" });

    const isMatch = await bcrypt.compare(password, worker.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: worker.id, role: "worker" }, JWT_SECRET, { expiresIn: "1h" });

    res.json({ token, worker });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Similar functions for Employer
exports.registerEmployer = async (req, res) => {
  try {
    const { name, company, location, password } = req.body;

    if (!name || !company || !location || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const employer = await Employer.create({
      name,
      company,
      location,
      password: hashedPassword,
    });

    res.status(201).json({ message: "Employer registered", employer });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.loginEmployer = async (req, res) => {
  try {
    const { name, password } = req.body;

    const employer = await Employer.findOne({ where: { name } });
    if (!employer) return res.status(404).json({ message: "Employer not found" });

    const isMatch = await bcrypt.compare(password, employer.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: employer.id, role: "employer" }, JWT_SECRET, { expiresIn: "1h" });

    res.json({ token, employer });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
