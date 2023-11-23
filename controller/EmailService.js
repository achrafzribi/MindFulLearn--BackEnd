// emailService.js
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mohamedachraf.zribi@esprit.tn',
    pass: 'achraf14328798'
  }
});

function sendTestEmail() {
  const mailOptions = {
    from: 'your.email@gmail.com',
    to: 'recipient@example.com',
    subject: 'Hello from Node.js',
    text: 'This is a test email sent from Node.js.'
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

export { sendTestEmail };
