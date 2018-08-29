import nodemailer from 'nodemailer';
import crypto from './crypto';
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  port: 25,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  tls: {
    rejectUnauthorized: false
  }
});


exports.passwordReset = async (email) => {
  const timer = new Date();
  timer.setDate(timer.getDate() + 1);
  const cypher = crypto.encrypt(timer.toDateString());

  const mailOptions = {
    from: '"Open School system',
    to: email,
    subject: 'Hello ✔',
    // text: 'Please follow the link below to change your password',
    html: `<p>Please follow the link below to change your password</p><br/>click <a href='http://localhost:3000?email=${email}&payload=${cypher}'>here</a>` // html body
  };

  await transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      throw error;
    }
    // console.log('Message sent: %s', info.messageId);
    // console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  });
};
