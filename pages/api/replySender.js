import sendgrid from "@sendgrid/mail";

async function replySender(req, res) {
  sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
  const message = {
    to: req.body.email,
    from: {
      name: "Andhika Personal Web",
      email: "andhikapramana101@gmail.com",
    },
    subject: `Follow up your message`,
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
                <h3>Hi ${req.body.fullname}, </h3>
                <div style="font-size: 16px;">
                <div>Thank you for getting in touch with me. Your message have been delivered to me, I'll reply it as soon as possible ❤️</div>
                <h4>Regards,</h4>
                <h4>Andhika Pramana Putra</h4>
                <br>
                </div>
                <div class="footer-links" style="display: flex;justify-content: center;align-items: center;">
                <a href="https://andhikapramana.my.id/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Website</a>
                <a href="https://github.com/vbuxx/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">GitHub</a>
                <a href="https://instagram.com/flavoocx/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Instagram</a>
                <a href="https://linkedin.com/in/andhikapramana/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">LinkedIn</a>
                    </div>
                    </div>
  </body>
        </html>
        
        `,
  };

  await sendgrid
    .send(message)
    .then((response) => console.log("Replied an email to ", message.to))
    .catch((err) => console.log(err));

  return res.status(200).json({ error: "" });
}

export default replySender;
