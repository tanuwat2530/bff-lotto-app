const axios = require('axios');

exports.forwardToBackend = async (requestData) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const response = await axios.post(`${apiUrl}/transfer-api/withdraw-credit`, requestData.body, {
    headers: { 'Content-Type': 'application/json' }
  });
  return response.data;
};