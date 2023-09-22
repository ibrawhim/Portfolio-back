const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const nodemailer = require('nodemailer')
let contactRouter = require('./routes/contact.route')

app.use(cors())
app.use(express.urlencoded({extended:true,limit:'50mb'}))
app.use(bodyParser.urlencoded({extended: true,limit:'50mb'}))
app.use(express.json({limit:'50mb'}))
app.use('/contact',contactRouter)



// var transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 465,
//     secure: true,
//     auth: {
//       user: 'ibrahimabiodun069@gmail.com',
//       pass: 'xiimfxbozayirwud'
//     },
//     tls: {
//         rejectUnauthorized: false, // ignore SSL certificate errors
//     }
//   });
  
//   var mailOptions = {
//     from: 'ibrahimabiodun069@gmail.com',
//     to: 'adeniyi.ibrawhim@yahoo.com',
//     subject: 'You Checked Ibrahim Portfolio',
//     text: 'Your message was received and will get back to you as soon as possible!'
//   };
  
//   transporter.sendMail(mailOptions, function(error, info){
//     if (error) {
//       console.log(error);
//     } else {
//       console.log('Email sent: ' + info.response);
//     }
//   });

app.listen('4444',()=>{
    console.log('listening here');
})