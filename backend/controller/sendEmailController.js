// emailSender.js
const nodemailer = require('nodemailer');

const sendEmail = async (to, subject, text) => {
  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "markbase99@gmail.com",
        pass: "hwkh esmi mezr sesw",
      },
    });

    let info = await transporter.sendMail({
      from: "merojagir0@gmail.com",
      to: to,
      subject: subject,
      text: text,
    });

    console.log("Email sent: " + info.response);
    return true; // Email sent successfully
  } catch (error) {
    console.error("Error sending email:", error);
    return false; // Email sending failed
  }
};

module.exports = { sendEmail };