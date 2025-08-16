// // backend/models/workerModel.js
// import mongoose from 'mongoose';

// const workerSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     skill: {
//       type: String,
//       required: true,
//     },
//     phone: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//     location: {
//       type: String,
//       required: true,
//     },
//     transportAvailable: {
//       type: Boolean,
//       default: false,
//     },
//     rating: {
//       type: Number,
//       default: 0,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// const Worker = mongoose.model('Worker', workerSchema);

// export default Worker;
const mongoose = require('mongoose');

const WorkerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  transport: { type: Boolean, default: false },
  location: { type: String },   // removed `required: true`
  skill: { type: String }       // removed `required: true`
});

module.exports = mongoose.model('Worker', WorkerSchema);
