const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'info@heister-solartechnik.de',
    pass: 'your-email-password'
  }
});

app.post('/send-email', (req, res) => {
  console.log('Request received:', req.body);
  const { name, email, phone, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'info@heister-solartechnik.de',
    subject: 'Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
