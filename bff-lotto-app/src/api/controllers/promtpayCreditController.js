const promtpayCreditService = require('../services/promtpayCreditService');

exports.addCredit = async (req, res) => {

  try {
    const result = await promtpayCreditService.forwardToBackend(req);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }

};