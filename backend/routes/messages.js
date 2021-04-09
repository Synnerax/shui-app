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
        console.log(verified_user)
        // get user by uuid in DB
        let user = db
        .get('users')
        .find({ uuid: verified_user.uuid })
        .value();

        // decrypt user uuid
        //let DECRYPTED_USER_KEY = CryptoJS.AES.decrypt(user.userkey, process.env.SECRET).toString(CryptoJS.enc.Utf8);

        // encrypt info for DB
        const message = {
            id: shortid.generate(),
            date: new Date().toLocaleString(),
            username: user.username,
            //password: CryptoJS.AES.encrypt(req.body.password, DECRYPTED_USER_KEY).toString(),
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
    console.log("should be token:", token)
    try {
        const verified_user = jwt.verify(token, process.env.JWT_KEY);
        let user = db.get('users').find({ uuid: verified_user.uuid }).value()
        
        
        
        //filter out all tags that user is following
        const filterflowTags = (flow) => {
            const filteredTags = flow.streams.filter((stream) =>
                user.streams.includes(stream) 
            )
            return filteredTags.length > 0;
        }

        //get all flows that user is following
        if (user.streams.length > 0) {
            let flows = [...db.get('stream-flow').filter(filterflowTags).value()]
            for(let i = 0; i < flows.length; i++) {
                console.log(i)
                let decryptedMsg = CryptoJS.AES.decrypt(flows[i].text, process.env.SECRET).toString(CryptoJS.enc.Utf8)
                console.log('this is the decrypted msg:',decryptedMsg)
                
                let tokenEncrypted = CryptoJS.AES.encrypt(decryptedMsg, token).toString()
                console.log('this is the tokenEncryptedMsg:',tokenEncrypted)
                flows[i] = {...flows[i], text: tokenEncrypted}
                
                
            }           
            res.status(200).send(flows)
        } else {            
            //let flows = db.get('stream-flow').value()
            res.status(200).send()
        }

    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})

module.exports = router;