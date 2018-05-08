const router = require('express').Router();
const path = require('path');
const environment = require('../environment.js');

const CONTACT_ADDRESS = 'wachell@gmail.com';

var mailer = require('nodemailer').createTransport({
  service: 'AOL',
  auth: {
    user: environment.email,
    pass: environment.password
  }
});

router.post('/contact', (req, res) => {
  mailer.sendMail({
    from: req.body.from,
    to: [CONTACT_ADDRESS],
    subject: `TWOREDDIAMONDS ${req.body.from}`,
    html: req.body.message || '[No message]'
  }, (err, info) => {
    if (err)
      return res.status(500).send(err);
    res.json({success: true});
  })
});

router.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public/'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

module.exports = router
