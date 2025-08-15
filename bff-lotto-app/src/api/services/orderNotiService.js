const axios = require('axios');

exports.forwardToBackend = async (requestData) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const response = await axios.post(`${apiUrl}/gateway-api/order-noti`, requestData, {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  });
  return response.data;
};