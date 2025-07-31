const payoutService = require('../services/payoutService');

exports.withdraw = async (req, res) => {
  try {
    const result = await payoutService.forwardToBackend(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};