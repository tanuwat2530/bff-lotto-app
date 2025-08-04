const historyService = require('../services/memberHistoryService');

exports.memberistory = async (req, res) => {
  
  try {
    const result = await historyService.forwardToBackend(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};