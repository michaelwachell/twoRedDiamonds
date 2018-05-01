const router = require('express').Router();
const path = require('path');

router.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../client/public/'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})


module.exports = router
