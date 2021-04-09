const { Router } = require('express');
const { db } = require('./db');
const bcrypt = require('bcrypt');
const shortid = require('shortid');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

const router = new Router();

router.post('/create-message', async (req, res) => {

    const token = req.headers['authorization'].split(' ')[1];

    try {
        // auth = is token valid?
        const verified_user = jwt.verify(token, process.env.JWT_KEY);
        // get user by uuid in DB
        let user = db
        .get('users')
        .find({ uuid: verified_user.uuid })
        .value();


        // encrypt info for DB
        const message = {
            id: shortid.generate(),
            date: new Date().toLocaleString(),
            username: user.username,
            streams: req.body.streams,
            text: CryptoJS.AES.encrypt(req.body.text, process.env.SECRET).toString()
        }

        // push to db
        db
        .get('stream-flow')
        .push(message)
        .write()

        // Tell FE all is ok!
        res.sendStatus(201)

    } catch(err) {
        // catch error
        console.error(err)
        res.status(400).send(err)
    }
})

router.get('/view', (req, res) => {
    const token = req.headers['authorization'].split(' ')[1];
    try {
        const verified_user = jwt.verify(token, process.env.JWT_KEY);
        let user = db.get('users').find({ uuid: verified_user.uuid }).value()
        
        
        
        // filter out all tags that user is following
        const filterflowTags = (flow) => {
            const filteredTags = flow.streams.filter((stream) =>
                user.streams.includes(stream) 
            )
            return filteredTags.length > 0;
        }

        // Find all the Streams user follows
        if (user.streams.length > 0) {
            let flows = [...db.get('stream-flow').filter(filterflowTags).value()]
            for(let i = 0; i < flows.length; i++) {
                let decryptedMsg = CryptoJS.AES.decrypt(flows[i].text, process.env.SECRET).toString(CryptoJS.enc.Utf8)
                
                let tokenEncrypted = CryptoJS.AES.encrypt(decryptedMsg, token).toString()
                flows[i] = {...flows[i], text: tokenEncrypted}
                
                
            }           
            res.status(200).send(flows)
        } else {            
            res.status(200).send()
        }

    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})

module.exports = router;