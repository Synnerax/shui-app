require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const registerUser = require('./routes/registerUser');
const authenticate = require('./routes/login.js');


const App = express();

App.use(helmet());
App.use(cors());
App.use(express.json());

App.use('/register', registerUser);
App.use('/login', authenticate)


App.listen(3000, () => {
    console.log('Server is running on port: 3000')
})