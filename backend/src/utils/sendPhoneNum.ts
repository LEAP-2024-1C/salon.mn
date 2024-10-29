const twilio = require("twilio");

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioNumber = process.env.TWILIO_PHONE_NUMBER;
const client = twilio(accountSid, authToken);

export const sendPhoneNum = async (phoneNumber: number, otp: number) => {
  return await client.messages.create({
    body: `Taны баталгаажуулах код ${otp}`,
    from: twilioNumber,
    to: `+976${phoneNumber}`,
  });
};
