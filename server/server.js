
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const studentRoutes = require('./routes/studentRoutes');

app.use(cors());
app.use(express.json());

app.use('/', studentRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
