const express = require('express');
const router = express.Router();
const LoginController = require('../controllers/loginController');
const RegisterController = require('../controllers/registerController');
const PayinController = require('../controllers/payinController');
const PayoutController = require('../controllers/payoutController');
const CreditController = require('../controllers/creditBalanceController');
const BetHistoryController = require('../controllers/betHistoryController');
const MemberHistoryController = require('../controllers/memberHistoryController');
const OrderNotiController = require('../controllers/orderNotiController');
const QrPromtpayController = require('../controllers/qrPromtpayController');


  router.post('/login', LoginController.loginUser);
  router.post('/register', RegisterController.registerUser);
  router.post('/credit', CreditController.creditBalance);
  router.post('/bet', BetHistoryController.betHistory);
  router.post('/history', MemberHistoryController.memberistory);
  
  
  router.post('/payin', PayinController.deposit);
  router.post('/payout', PayoutController.withdraw);
  router.post('/order-noti', OrderNotiController.noti);
  router.post('/promtpay', QrPromtpayController.promtpay);



module.exports = router;