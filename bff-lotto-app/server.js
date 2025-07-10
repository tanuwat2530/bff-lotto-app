const express = require('express');
const cors = require('cors');
const userRoutes = require('./src/api/routes/apiRouter');

const app = express();
const SERVER_PORT = process.env.SERVER_PORT || 3003;

app.use(cors());
app.use(express.json());

app.use('/bff-lotto-app', userRoutes);

app.listen(SERVER_PORT, () => {
  console.log(`BFF running on http://localhost:${SERVER_PORT}`);
});