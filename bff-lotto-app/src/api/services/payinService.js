const axios = require('axios');

exports.forwardToBackend = async (requestData) => {
  console.log(requestData)
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  console.log(`${apiUrl}/gateway-api/pay-in`)
  const response = await axios.post(`${apiUrl}/gateway-api/pay-in`, requestData, {
    headers: { 'Content-Type': 'application/json' }
  });
  return response.data;
};