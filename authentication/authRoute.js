const router = require('express').Router({ caseSensitive: true, strict: true });
const controller = require('./authController');
router.post('/register', controller.registerUser);
module.exports = router;