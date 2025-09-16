const telegramService = require('../services/telegramService');

exports.telegramDepositNoti = async (req, res) => {
  try {
    const result = await telegramService.depositMessage(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};

exports.telegramWithdrawtNoti = async (req, res) => {
  try {
    const result = await telegramService.withdrawMessage(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};