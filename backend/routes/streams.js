const { Router } = require('express');
const { db } = require('./db');
const bcrypt = require('bcrypt');
const shortid = require('shortid');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

const router = new Router();

router.post('/', async (req, res) => {

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
            owner: CryptoJS.SHA3(user.uuid).toString(),
            username: req.body.username,
            //password: CryptoJS.AES.encrypt(req.body.password, DECRYPTED_USER_KEY).toString(),
            streams: req.body.streams,
            message: req.body.msg 
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
/*
router.get('/', async (req, res) => {

    // auth
    const token = req.headers['authorization'].split(' ')[1];

    try {
        // auth = is token valid?
        const verified_user = jwt.verify(token, process.env.JWT_KEY);
        
        // hash uuid for use as a key to search lck db for lckd.
        const HASHED_UUID = CryptoJS.SHA3(verified_user.uuid).toString()

        // return matching lckd in db
        let data = db.get('lckd')
        .filter({ owner: HASHED_UUID })
        .value();

        // remove owner from lckd
        let resp = data.map(lckd => {
            return {
                id: lckd.id,
                domain: lckd.domain, 
                username: lckd.username, 
                password: lckd.password, 
            }
        })
        
        // Send results to FE
        res.send(resp)

    } catch(err) {
        // Catch error
        res.sendStatus(400)
    }
})
*/
module.exports = router;