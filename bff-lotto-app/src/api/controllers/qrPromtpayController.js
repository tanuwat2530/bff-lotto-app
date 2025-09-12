const qrPromtpayService = require('../services/qrPromtpayService');

exports.promtpay = async (req, res) => {
  try {
    const result = await qrPromtpayService.forwardToBackend(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};