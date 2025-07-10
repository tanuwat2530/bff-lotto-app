const express = require('express');
const cors = require('cors');
const userRoutes = require('./src/api/routes/apiRouter');

const app = express();
const NODE_PORT = process.env.NODE_PORT || 3003;

app.use(cors());
app.use(express.json());

app.use('/bff-lotto-app', userRoutes);

app.listen(NODE_PORT, () => {
  console.log(`BFF running on http://localhost:${NODE_PORT}`);
});