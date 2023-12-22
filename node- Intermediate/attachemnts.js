const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'your_email@gmail.com',
        pass: 'your_password',
    },
});

const mailOptions = {
    from: 'your_email@gmail.com',
    to: 'recipient@example.com',
    subject: 'Node.js Email with Attachments Example',
    text: 'Check out the attachments!',
    attachments: [
        {
            path: 'file.txt',
        },
        {
            filename: 'image.jpg',
            path: 'image.jpg',
        },
    ],
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('Error sending email with attachments:', error);
    } else {
        console.log('Email with attachments sent:', info.response);
    }
});
