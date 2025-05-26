const express = require('express');
const router = express.Router();
const {
  register,
  login,
  forgotPassword,
  validateToken,
  resetPassword,
} = require('../controllers/authController');

router.post('/register', register);
router.post('/login', login);
router.post('/forgot-password', forgotPassword);
router.get('/reset-password/:token', validateToken);
router.post('/reset-password/:token', resetPassword);

module.exports = router;
