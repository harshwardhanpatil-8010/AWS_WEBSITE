import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import dns from 'dns';
import { promisify } from 'util';


dotenv.config();
const router = express.Router();
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const verifyEmailDomain = async (email) => {
    if (!emailRegex.test(email)) return false;

    const domain = email.split('@')[1];
    const resolveMx = promisify(dns.resolveMx);
    try {
        const addresses = await resolveMx(domain);
        return addresses && addresses.length > 0; 
    } catch (error) {
        console.error('Error resolving MX records:', error);
        return false; 
    }
};

router.post('/contact', async (req, res) => {
    console.log('Received contact form data:', req.body); // Log request body
    const { name, email, description } = req.body;
  
    const isValidEmail = await verifyEmailDomain(email);
    if (!name) {
      return res.status(400).send({ error: 'Please enter your name.' });
    }
    if (!isValidEmail) {
      return res.status(400).send({ error: 'Please enter a correct email address.' });
    }
    if (!description) {
      return res.status(400).send({ error: 'Please enter a message.' });
    }
  
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  
    const mailOptions = {
      from: email,
      to: process.env.RECEIVER_EMAIL,
      subject: 'New Contact Us Message',
      text: `You have a new message from: ${name} \nmail-id: ${email}\n\nMessage:\n${description}`,
    };
  
    try {
      await transporter.sendMail(mailOptions);
      res.status(200).send({ message: 'Your message has been sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).send({ error: 'Failed to send message. Please try again later.' });
    }
  });
  
  

export default router;
