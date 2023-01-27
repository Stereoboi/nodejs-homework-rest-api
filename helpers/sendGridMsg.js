const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const sendGridMsg = (email, verificationToken) => {
  const HOST = process.env.HOST;
  const SENDGRID_EMAIL = process.env.SENDGRID_EMAIL;
  const msg = {
    to: email,
    from: SENDGRID_EMAIL,
    subject: "Registration Verefication",
    html: `<b>To verify your registration tap at this <a href="http://${HOST}/api/users/verify/${verificationToken}">link</a></b>`,
  };

  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
};

module.exports = sendGridMsg;
