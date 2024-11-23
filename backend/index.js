const express = require('express');
const nodemailer = require('nodemailer');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const axios = require('axios');
const crypto = require('crypto');
const { v4: uuidv4 } = require('uuid');
require('dotenv').config();

const app = express();
const port = 5000;
// Sample
// Configure CORS
app.use(cors());
app.use(express.json());

// Configure Multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Email Sending Route
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

// Payment Gateway Configuration
const MERCHANT_KEY = "48b460bd-1463-497b-a621-8f9f73e193cd";
const MERCHANT_ID = "M22MU4WHSIF5F";

const prod_URL = "https://api.phonepe.com/apis/hermes/pg/v1/pay";
const prod_status_URL = "https://api.phonepe.com/apis/hermes/pg/v1/status";

const redirectUrl = "http://localhost:8000/status";
const successUrl = "http://localhost:5173/payment-success";
const failureUrl = "http://localhost:5173/payment-failure";

// Create Order Route
app.post('/create-order', async (req, res) => {
  const { name, mobileNumber, amount } = req.body;
  const orderId = uuidv4();

  // Payment Payload
  const paymentPayload = {
    merchantId: MERCHANT_ID,
    merchantUserId: name,
    mobileNumber: mobileNumber,
    amount: amount * 100,
    merchantTransactionId: orderId,
    redirectUrl: `${redirectUrl}/?id=${orderId}`,
    redirectMode: 'POST',
    paymentInstrument: {
      type: 'PAY_PAGE'
    }
  };

  const payload = Buffer.from(JSON.stringify(paymentPayload)).toString('base64');
  const keyIndex = 1;
  const string = payload + '/pg/v1/pay' + MERCHANT_KEY;
  const sha256 = crypto.createHash('sha256').update(string).digest('hex');
  const checksum = sha256 + '###' + keyIndex;

  const option = {
    method: 'POST',
    url: prod_URL,
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
      'X-VERIFY': checksum
    },
    data: {
      request: payload
    }
  };

  try {
    const response = await axios.request(option);
    console.log(response.data.data.instrumentResponse.redirectInfo.url);
    res.status(200).json({ msg: "OK", url: response.data.data.instrumentResponse.redirectInfo.url });
  } catch (error) {
    console.log("Error in payment", error);
    res.status(500).json({ error: 'Failed to initiate payment' });
  }
});

// Payment Status Route
app.post('/status', async (req, res) => {
  const merchantTransactionId = req.query.id;

  const keyIndex = 1;
  const string = `/pg/v1/status/${MERCHANT_ID}/${merchantTransactionId}` + MERCHANT_KEY;
  const sha256 = crypto.createHash('sha256').update(string).digest('hex');
  const checksum = sha256 + '###' + keyIndex;

  const option = {
    method: 'GET',
    url: `${prod_status_URL}/${MERCHANT_ID}/${merchantTransactionId}`,
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
      'X-VERIFY': checksum,
      'X-MERCHANT-ID': MERCHANT_ID
    },
  };

  axios.request(option).then((response) => {
    if (response.data.success === true) {
      return res.redirect(successUrl);
    } else {
      return res.redirect(failureUrl);
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
