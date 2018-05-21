let fs = require('fs'),
    path = require('path'),
    util = require('util');
const nodemailer = require('nodemailer');
let content;

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // Upgrade later with STARTTLS
    auth: {
        user: 'Your email',
        pass: 'your password'
    }
});


fs.readFile(path.join(__dirname, 'mailtemplate', 'promotion.html'), 'utf8', function (err, data) {
    if (err) {
        console.log(err);
        process.exit(1);
    }


    content = util.format(data);
    // Console.log(content);


    const mailOptions = {
        from: 'sender',
        to: 'reciever',
        subject: 'Sending Email using Node.js',
        html: content
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            // Console.log(content);
            console.log(`Email sent: ${info.response}`);
        }
    });

});
