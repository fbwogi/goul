//index.js
const express = require('express');
const connectDB = require('./config/db');

const indie = express()

connectDB();

indie.get('/', (req, res) => res.send('Hello world!'));

const PORT = process.env.PORT || 8082

indie.listen(PORT, () => console.log('Server running on port 8082'))

