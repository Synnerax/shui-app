const { Router } = require('express');
const { db } = require('./db');
const jwt = require('jsonwebtoken');
const router = new Router();

router.get('/', (req, res) => {
    const token = req.headers['authorization'].split(' ')[1];

    try {
        const verified_user = jwt.verify(token, process.env.JWT_KEY);
        let user = db.get('users').find({ uuid: verified_user.uuid }).value()
        
        res.status(200).send(user.streams)
    } catch (error) {
        console.log(error)
        res.status(400).send('error')
    }
})

router.post('/add', async (req, res) => {
    const token = req.headers['authorization'].split(' ')[1];

    try {
        const verified_user = jwt.verify(token, process.env.JWT_KEY);
        let user = await db.get('users').find({ uuid: verified_user.uuid }).get('streams').push(req.body.stream).write()
        
        res.status(200).send(user.streams)
    } catch (error) {
        console.log(error)
        res.status(400).send('error')
    }
})

router.post('/remove', async (req, res) => {
    const token = req.headers['authorization'].split(' ')[1];
    try {
        const verified_user = jwt.verify(token, process.env.JWT_KEY);
        
        let streams = [...(await db.get('users').find({ uuid: verified_user.uuid }).get('streams').value())]
        
        let array = streams.filter((stream) => {
            return stream !== req.body.stream
        })

        let updated = await db.get('users').find({uuid: verified_user.uuid}).assign({streams: array}).write()
        
        
        res.status(200).send(updated.streams)
    } catch (error) {
        console.log(error)
        res.status(400).send('error')
    }
})

module.exports = router;