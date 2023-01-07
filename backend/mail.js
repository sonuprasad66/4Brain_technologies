const nodemailer = require("nodemailer");

const otp = Math.floor(1000 + Math.random() * 9000);

const transport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: "sp.srp1999@gmail.com",
    pass: "Gmail@1sonu",
  },
});

transport
  .sendMail({
    from: process.env.OTP_EMAIL,
    to: "sonuprasad.srp@gmail.com",
    subject: "Verification OTP",
    text: `<h1>Hello sonuprasad.srp@gmail.com ,</h1></be><p>Your login verification OTP is <b>${otp}</b></p> `,
  })
  .then(async () => {
    console.log("mail send");
  });
