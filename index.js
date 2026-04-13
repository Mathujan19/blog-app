const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 8000;
require('dotenv').config();
require('./db'); // Import the database connection

// Middleware
app.use(bodyParser.json());
app.use(cors());
 app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Blog API' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});