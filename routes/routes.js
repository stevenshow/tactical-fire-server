const router = require('express').Router();

router.use('/', require('./index'));
router.use('/products', require('./products'));
router.use('/deploy', require('./deploy'));

module.exports = router;
