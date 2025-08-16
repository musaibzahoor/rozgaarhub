import mongoose from "mongoose";

const employerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String, required: true },
});

const Employer = mongoose.model("Employer", employerSchema);

export default Employer;
