import sendgrid from "@sendgrid/mail";

async function sendEmail(req, res) {
  sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
  const message = {
    to: "andhikapramana101@gmail.com",
    from: {
      name: "Andhika Personal Web",
      email: "andhikapramana101@gmail.com",
    },
    subject: `[New Message] : ${req.body.subject}`,
    //   text: req.body.message,
    html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html lang="en">
        <head>
    <title>Email Signature</title>
    <style>
      @media only screen and (max-width: 560px) {
        table {
          padding: 0 0;
        }
      }
    </style>
  </head>
  <body>
    <div class="container" style="margin-left: 20px;margin-right: 20px;">
                <h3>You've got a new mail from ${req.body.fullname}, their email is: ✉️${req.body.email} </h3>
                <div style="font-size: 16px;">
                <p>Message:</p>
                <p>${req.body.message}</p>
                <br>
                </div>
  
  </body>
        </html>
        
        `,
  };

  await sendgrid
    .send(message)
    .then((response) => console.log("Email sent to ", message.to))
    .catch((err) => console.log(err));

  return res.status(200).json({ error: "" });
}

export default sendEmail;
