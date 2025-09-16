const withdrawCreditService = require('../services/withdrawCreditService');

exports.withdrawCredit = async (req, res) => {

  try {
    const result = await withdrawCreditService.forwardToBackend(req);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }

};