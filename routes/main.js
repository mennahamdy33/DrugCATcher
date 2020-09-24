const express = require('express');

const router = express.Router();

const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
var nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'menna.h.m.elsayed@gmail.com',
     //   pass: '********'
    }
});
router.get('/',(req,res)=>{
    res.render('home/Screen_1')
});
router.get('/Screen_2',(req,res)=>{

    res.render('home/Screen_2')
});

router.post('/Screen_2',(req,res)=>{
    console.log(req.body);
    var mailOptions = {
        from: '"Menna" <menna.h.m.elsayed@gmail.com>', // sender address
        to: `   ${req.body.email},menna.h.m.elsayed@gmail.com`, // list of receivers
        subject: 'Request ', // Subject line
        text: JSON.stringify(req.body)// plaintext body

    };
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
    });

    res.render('home/Screen_3')
});
router.get('/Screen_3',(req,res)=>{

    res.render('home/Screen_3')
});

module.exports = router;
