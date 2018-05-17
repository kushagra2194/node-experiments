var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
        user: 'your email',
        pass: 'your password'
    }
});

// var smtpConfig = {
    
// };

var mailOptions = {
  from: 'your email',
  to: 'kushagra.goel@locusrags.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};



transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});