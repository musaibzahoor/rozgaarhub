import express from "express"
import twilio from "twilio"
import { Job, Application } from "../models/index.js"

const router = express.Router()

// Twilio setup
const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN)

router.post("/", async (req, res) => {
  try {
    const { jobId, applicantName } = req.body
    const job = await Job.findByPk(jobId)

    if (!job) return res.status(404).json({ msg: "Job not found" })

    // Save application in DB
    await Application.create({ jobId, applicantName })

    // Send SMS to your number
    await client.messages.create({
      body: `${applicantName} applied for ${job.employerName}'s job post as a ${job.title}`,
      from: process.env.TWILIO_NUMBER,  // your Twilio number
      to: process.env.MY_PHONE_NUMBER   // your own phone
    })

    res.json({ msg: "Application submitted and SMS sent!" })
  } catch (err) {
    console.error(err)
    res.status(500).json({ msg: "Server error" })
  }
})

export default router
