const axios = require('axios');

exports.forwardToBackend = async (requestData) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const response = await axios.post(`${apiUrl}/lotto-api/credit`, requestData, {
    headers: { 'Content-Type': 'application/json' }
  });
  return response.data;
};