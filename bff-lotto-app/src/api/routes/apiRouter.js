const express = require('express');
const router = express.Router();
const LoginController = require('../controllers/loginController');
const RegisterController = require('../controllers/registerController');
const PayinController = require('../controllers/payinController');
const PayoutController = require('../controllers/payoutController');


  router.post('/login', LoginController.loginUser);
  router.post('/register', RegisterController.registerUser);
  router.post('/payin', PayinController.deposit);
  router.post('/payout', PayoutController.withdraw);


module.exports = router;