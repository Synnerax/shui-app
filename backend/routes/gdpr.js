const { Router, response } = require('express');
const { db } = require('./db');
const bcrypt = require('bcrypt');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

const router = new Router();


router.get('/remove-me', async (req, res) => {

    const token = req.headers['authorization'].split(' ')[1];
    console.log("should be token:", token)
    try {
        // Checks if token is valid
        const verified_user = jwt.verify(token, process.env.JWT_KEY);

        // Finds the user in database
        let user = await db.get('users')
        .find({uuid: verified_user.uuid}).value()
        
        // Finds all messages with the same username as the user thats being deleted
        let flowsToChange = await db.get('stream-flow').filter({ username: user.username }).value()

        // Loops all the messages and changes username to Anonym
        for(let i = 0; i < flowsToChange.length; i++) {
            let id = flowsToChange[i].id
            console.log("id in for loop:", id)
            await db.get('stream-flow').find({ id: id }).assign({ username: "Anonym"}).write()
        }
           
        
        db.get('users').remove({ uuid: verified_user.uuid }).write();
        
        
        // Send back status to frontend when user is deleted
        res.status(201).send('user was deleted')

    } catch(err) {
        // catch error
        console.error(err)
        res.status(400).send(err)
    }
})


module.exports = router;