const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('your_sendgrid_api_key');

const msg = {
    to: 'recipient@example.com',
    from: 'your_email@example.com',
    subject: 'Node.js Email Example with SendGrid',
    text: 'Hello from Node.js with SendGrid!',
};

sgMail.send(msg)
    .then(() => {
        console.log('Email sent successfully');
    })
    .catch((error) => {
        console.error('Error sending email:', error);
    });
