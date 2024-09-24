const express = require('express');
const nodemailer = require('nodemailer');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 5000;

// Configure CORS
app.use(cors());

// Configure Multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage });

app.post('/send-email', upload.fields([
  { name: 'aadharCard', maxCount: 1 },
  { name: 'panCard', maxCount: 1 },
  { name: 'graduationMarksheet', maxCount: 1 },
  { name: 'passportSizePhoto', maxCount: 1 },
  { name: 'updatedResume', maxCount: 1 },
]), (req, res) => {
  const { fullName, fatherName, gender, batch, stream, collegeName, address, whatsappNumber, email, paymentMode } = req.body;

  // Set up Nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: 'surajverma7049214132@gmail.com', // Replace with your recipient email
    subject: 'Registration Form Submission',
    text: `
      Full Name: ${fullName}
      Father's Name: ${fatherName}
      Gender: ${gender}
      Batch: ${batch}
      Stream: ${stream}
      College Name: ${collegeName}
      Address: ${address}
      WhatsApp Number: ${whatsappNumber}
      Email: ${email}
      Payment Mode: ${paymentMode}
    `,
    attachments: [
      req.files.aadharCard ? { filename: req.files.aadharCard[0].originalname, content: req.files.aadharCard[0].buffer } : null,
      req.files.panCard ? { filename: req.files.panCard[0].originalname, content: req.files.panCard[0].buffer } : null,
      req.files.graduationMarksheet ? { filename: req.files.graduationMarksheet[0].originalname, content: req.files.graduationMarksheet[0].buffer } : null,
      req.files.passportSizePhoto ? { filename: req.files.passportSizePhoto[0].originalname, content: req.files.passportSizePhoto[0].buffer } : null,
      req.files.updatedResume ? { filename: req.files.updatedResume[0].originalname, content: req.files.updatedResume[0].buffer } : null,
    ].filter(Boolean),
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      
      console.error('Error sending email:', error); // Log the error for debugging
      return res.status(500).send('Error sending email');
    }
    res.status(200).send('Email sent successfully');
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
