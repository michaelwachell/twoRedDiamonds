const environment = require('../../environment.js');

const CONTACT_ADDRESS = 'wachell@gmail.com';

var mailer = require('nodemailer').createTransport({
  service: 'Gmail',
  auth: {
    user: environment.email,
    pass: environment.password
  }
});

const mailMan = (req, res) => {
  console.log('here is req.body', req.body)
  mailer.sendMail({
    from: req.body.from,
    to: [CONTACT_ADDRESS],
    subject: `TWOREDDIAMONDS ${req.body.name}`,
    html: `${req.body.message} || THIS WAS FROM: ${req.body.from}` || '[No message]'
  }, (err, info) => {
    if (err) {
      return res.status(500).send(err);
    } else {
      res.json({
        success: true
      });
    }
  })
};

module.exports = {
  mailMan
}