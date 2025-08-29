import twilio from "twilio";

const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH);

export default function sendSMS(to, body) {
  return client.messages.create({
    from: process.env.TWILIO_PHONE,
    to,
    body,
  });
}
