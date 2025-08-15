const orderNotiService = require('../services/orderNotiService');

exports.noti = async (req, res) => {

  try {
    const result = await orderNotiService.forwardToBackend(req);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }

};