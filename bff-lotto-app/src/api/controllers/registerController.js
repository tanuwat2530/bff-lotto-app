const registerUser = require('../services/registerService');

exports.registerUser = async (req, res) => {
  try {
    const result = await registerUser.forwardToBackend(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};