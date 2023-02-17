require('dotenv').config();
const cors = require('cors');

const express = require('express'); // import express
const app = express(); // instance express


const port = process.env.PORT || 5000;

// connect to DB
require('./config/mongoose.config');


// middleware
app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

// route module instance
require('./routers/author.route')(app);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});