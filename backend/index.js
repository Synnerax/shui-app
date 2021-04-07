require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const registerUser = require('./routes/registerUser');
const authenticate = require('./routes/login.js');
const streamMessages = require('./routes/streams.js');
const PORT = process.env.PORT || 3000

const App = express();
App.use(express.static('../dist'))
App.use(helmet());
App.use(cors());
App.use(express.json());

App.use('/register', registerUser);
App.use('/login', authenticate)
App.use('/stream', streamMessages)


App.listen(PORT, () => {
    console.log('Server is running on port: 3000')
})