const express = require('express');
const router = express.Router();
const LoginController = require('../controllers/loginController');
const RegisterController = require('../controllers/registerController');
const PayinController = require('../controllers/payinController');
const PayoutController = require('../controllers/payoutController');


  router.post('/login', LoginController.loginUser);
  router.post('/register', RegisterController.registerUser);
  router.post('/gateway/payin', PayinController.deposit);
  router.post('/gateway/payout', PayoutController.withdraw);


module.exports = router;