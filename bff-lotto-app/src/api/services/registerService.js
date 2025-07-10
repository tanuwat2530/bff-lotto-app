const axios = require('axios');

exports.forwardToBackend = async (requestData) => {
  
  const response = await axios.post('http://localhost:8080/lotto-api/register', requestData, {
    headers: { 'Content-Type': 'application/json' }
  });
  return response.data;
};