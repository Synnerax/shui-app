const { Router, response } = require('express');
const { db } = require('./db');
const bcrypt = require('bcrypt');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

const router = new Router();


router.post('/remove-me', async (req, res) => {

    const token = req.headers['authorization'].split(' ')[1];
    
    try {
        // auth = is token valid?
        const verified_user = jwt.verify(token, process.env.JWT_KEY);
        console.log(verified_user)

        let user = await db.get('users')
        .find({uuid: verified_user.uuid}).value()
        
        let flowsToChange = await db.get('stream-flow').filter({ username: user.username }).value()
        console.log("Flows To change:",flowsToChange)
        for(let i = 0; i < flowsToChange.length; i++) {
            let id = flowsToChange[i].id
            console.log("id in for loop:", id)
            await db.get('stream-flow').find({ id: id }).assign({ username: "Anonym"}).write()
        }
        //let msg = await db.get('stream-flow').filter({ username: user.username }).value()        
        console.log("this is the user:",user.username)
        //console.log("this is the msg:",msg)
        // get user by uuid in DB
        await db.get('users')
        .remove({ uuid: verified_user.uuid })
        .write();
        console.log(user)
        
        // Tell FE all is ok!
        res.status(201).send('user was deleted')

    } catch(err) {
        // catch error
        console.error(err)
        res.status(400).send(err)
    }
})


module.exports = router;