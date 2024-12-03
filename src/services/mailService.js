const nodemailer = require('nodemailer');

// Create a reusable transport object using SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can use a different email provider
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Function to send dummy email (with reset token)
const sendDummyEmail = (toEmail, resetToken) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: toEmail,
    subject: 'Dummy Email from Forgot Password Request',
    text: `This is a dummy email. Use this reset token to reset your password: ${resetToken}`
  };

  return transporter.sendMail(mailOptions);
};

module.exports = { sendDummyEmail };
