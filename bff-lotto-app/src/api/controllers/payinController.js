const payinService = require('../services/payinService');

exports.deposit = async (req, res) => {
  try {
    const result = await payinService.forwardToBackend(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};