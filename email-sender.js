//5.1 create a file named email-sender  et installe npm install nodemailer avec commande "npm i nodemailer"
//5.2 Try to send your self email using this

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ibtissembengaied07@gmail.com',
    pass: 'ibtissem1234'
  }
});

var mailOptions = {
  from: 'ibtissembengaied07@gmail.com',
  to: 'ibtissembengaied07@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'hello ibtissem!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});