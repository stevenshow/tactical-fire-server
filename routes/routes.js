const router = require('express').Router();

router.use('/', require('./index'));
router.use('/deploy', require('./deploy'));

module.exports = router;
