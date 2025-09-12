const axios = require('axios');

exports.forwardToBackend = async (requestData) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  
  const response = await axios.post(`${apiUrl}/transfer-api/promtpay`, requestData, {
    headers: { 'Content-Type': 'application/json' }
  });
  return response.data;
};