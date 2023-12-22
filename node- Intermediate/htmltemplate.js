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
    subject: 'Node.js HTML Email Example',
    html: '<h1>Hello from Node.js!</h1><p>This is an HTML email.</p>',
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('Error sending HTML email:', error);
    } else {
        console.log('HTML Email sent:', info.response);
    }
});
