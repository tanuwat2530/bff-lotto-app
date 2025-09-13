const axios = require('axios');
const crypto = require('crypto');

// It's best practice to get sensitive information like the bot token
// from environment variables to keep it secure.
const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
// You can also get the chat ID from an environment variable
// or from the requestData if your function is designed to be dynamic.
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;



exports.sendMessage = async (requestData) => {
  // Ensure the message text exists in the request data
  // if (!requestData || !requestData.text) {
  //   console.error('Error: Message text is missing in the request data.');
  //   return {
  //     statusCode: 400,
  //     body: 'Message text is required.'
  //   };
  // }


  // Telegram API endpoint for sending a message
  const telegramApiUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
  const member_id = requestData.member_id;
  const qr_image = requestData.qr_image;
  const amount = requestData.amount;
  const promtpay_id = requestData.promtpay_id; 
  const promtpay_name = requestData.promtpay_name;
  const bank_provider = requestData.bank_provider;
  
  // ➡️ Encode the qr_image string to MD5
const md5_qr_image = crypto.createHash('md5').update(qr_image).digest('hex');



  try {
    // Make the POST request to the Telegram API
    const response = await axios.post(telegramApiUrl, {
      chat_id: CHAT_ID,
      "text": "🔔 🔔 🔔 🔔 🔔  หวยพระนคร 🔔 🔔 🔔 🔔 🔔 \n\n 📣 สมาชิกหมายเลข : "+member_id+" \n 📣 โอนเงิน : "+amount+" บาท \n 📣 เข้าพร้อมเพย์ : "+promtpay_id+" \n 📣 ชื่อบัญชี : "+promtpay_name+" \n 📣 ธนาคาร : "+bank_provider+" \n รหัสอ้างอิง : "+md5_qr_image+" \n\n ⚠️ ⚠️ ⚠️ เข็คยอดโอน ก่อนเพิ่มเครดิต ⚠️ ⚠️ ⚠️ \n\n [✅ ✅ ✅ ✅ ✅ เพิ่มเครดิต ✅ ✅ ✅ ✅ ✅](https://www.google.com/)",
      parse_mode: "MarkdownV2"
    });

    // Log the successful response from the Telegram API
    //console.log('Message sent successfully:', response.data);

    // Return a success status code and body
    return {
      statusCode: 200,
      body: 'Message sent successfully!'
    };

  } catch (error) {
    // Handle different types of errors
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      //console.error('Error sending message:', error.response.data);
      return {
        statusCode: error.response.status,
        body: `Telegram API Error: ${JSON.stringify(error.response.data)}`
      };
    } else if (error.request) {
      // The request was made but no response was received
      //console.error('Error: No response received from Telegram API.');
      return {
        statusCode: 500,
        body: 'Network Error: No response from Telegram API.'
      };
    } else {
      // Something happened in setting up the request that triggered an Error
      //console.error('Error setting up the request:', error.message);
      return {
        statusCode: 500,
        body: 'Internal Server Error: Failed to set up the request.'
      };
    }
  }
};