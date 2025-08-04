const betHistoryService = require('../services/betHistoryService');

exports.betHistory = async (req, res) => {
  try {
    const result = await betHistoryService.forwardToBackend(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};