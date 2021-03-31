const { Router } = require('express');
const { db } = require('./db');
const bcrypt = require('bcrypt');
const shortid = require('shortid');
const CryptoJS = require('crypto-js');

const router = new Router();

router.post('/', async (req, res) => {
    console.log(req.body)
    if(req.body.username && req.body.password) { 

        // encrypt pw with userkey
        const HASHED_PW = await bcrypt.hash(req.body.password, 10);
        
        // generate userkey 
        const USER_KEY = shortid.generate();

        // encypt USER_KEY with our SECRET
        const ENCRYPTED_USER_KEY = CryptoJS.AES.encrypt(USER_KEY, process.env.SECRET).toString();

        let user = {
            uuid: shortid.generate(),
            username: req.body.username,
            password: HASHED_PW, // hash with bcrypt
            userkey: ENCRYPTED_USER_KEY // encrypted with SECRET
        }
        
        // Add new user to db
        db.get('users')
        .push(user)
        .write()

        // All ok to frontend
        res.status(201).send('User created.');

    } else {
        res.status(400).send('Whoops! Did you really entered the credentials correctly?')
    }
})

module.exports = router;