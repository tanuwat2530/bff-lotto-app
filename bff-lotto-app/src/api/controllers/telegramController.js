const telegramService = require('../services/telegramService');

exports.telegramHelper = async (req, res) => {
  try {
    const result = await telegramService.sendMessage(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};