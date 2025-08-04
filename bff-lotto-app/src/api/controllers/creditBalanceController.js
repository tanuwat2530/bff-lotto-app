const creditBalanceService = require('../services/creditBalanceService');

exports.creditBalance = async (req, res) => {
  try {
    const result = await creditBalanceService.forwardToBackend(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};