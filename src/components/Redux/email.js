const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 1337;

app.use(cors());
app.use(bodyParser.json());

app.get('/send-email', (req, res) => {
  res.status(200).json({ message: 'GET request received' });
});

app.post('/send-email', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      host: 'sandbox.smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: '7378b6e3054f70',
        pass: '0e887dd174b093',
      },
    });

    const mailOptions = {
      from: '',
      to: 'ebrahim-mousa@hotmail.com',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
