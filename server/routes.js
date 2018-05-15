const router = require('express').Router();
const path = require('path');
const environment = require('../environment.js');
const contact = require('./controllers/contact.js');

router.post('/contact', contact.mailMan);


router.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public/'), function (err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

module.exports = router