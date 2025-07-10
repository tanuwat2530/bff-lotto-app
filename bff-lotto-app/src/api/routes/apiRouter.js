const express = require('express');
const router = express.Router();
const LoginController = require('../controllers/loginController');
const RegisterController = require('../controllers/registerController');


 router.post('/login', LoginController.loginUser);
  router.post('/register', RegisterController.registerUser);


module.exports = router;