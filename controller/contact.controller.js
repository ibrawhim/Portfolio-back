const nodemailer = require('nodemailer')
const dotenv = require('dotenv')
dotenv.config()


const contact = (req, res) => {
    console.log(req.body)
    var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'ibrahimabiodun069@gmail.com',
      pass: process.env.PASS
    },
    tls: {
        rejectUnauthorized: false, // ignore SSL certificate errors
    }
  });
  
  var mailOptions = {
    from: req.body.email,
    to: 'ibrahimabiodun069@gmail.com',
    subject: `${req.body.name} checked your portfolio.`,
    text: `Message from: ${req.body.message} and my email is ${req.body.email}
    `
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });;
}


module.exports = {contact}