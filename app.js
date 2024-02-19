const nodemailer = require('nodemailer');
const express= require('express');

const app=express();

app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
let email=req.query.email;
var transporter =nodemailer.createTransport({
    host: 'smtp.mail.ru',
    port: 465,
    secure: true,
    auth:{
        user:"nan_nan.2001@mail.ru",
        pass: "rGhRwsvS6WgKQgKmqhhc"
    }
});
var mailOptions = {
    from: 'nan_nan.2001@mail.ru',
    to: email,
    subject:'Sending by using Node.js',
    text:'Hello World, by Nargiza'
};
if (email != null){
transporter.sendMail(mailOptions,function(error,info){
    if(error){
        console.log(error);
    }
    else{
        console.log('Email sent: ' + info.response);
    }
});
};
res.render("index.ejs");
});
app.listen(3000);