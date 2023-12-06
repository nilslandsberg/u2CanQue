const { NextRequest, NextResponse } = require('next/server');
const nodemailer = require('nodemailer');
const Mail = require('nodemailer/lib/mailer');

async function POST(request) {

  const { email, name, phone, eventDate, attendees, message } = await request.json();

  const transport = nodemailer.createTransport({
    service: 'gmail',
    /* 
      setting service as 'gmail' is same as providing these setings:
      host: "smtp.gmail.com",
      port: 465,
      secure: true
      If you want to use a different email provider other than gmail, you need to provide these manually.
      Or you can go use these well-known services and their settings at
      https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
    */
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const cateringMessage = `Catering request from ${name}\n\nE-mail: ${email}\n\nPhone Number: ${phone}\n\nDate of Event: ${eventDate}\n\nNumber of Attendees: ${attendees}\n\nClient Message: ${message}`
  const mailOptions = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: `Catering Request from ${name} (${email})`,
    text: cateringMessage,
  };

  const sendMailPromise = () =>
    new Promise((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Email sent');
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: 'Email sent' });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}

// Export the POST function if needed in another file
export { POST };
