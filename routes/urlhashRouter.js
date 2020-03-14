const express = require('express');
const sh = require('shorthash');

const { query, endConnect } = require('../db');

const router = express.Router();

router.post('/create', async (req, res) => {
    const { url } = req.body;
    const hash = sh.unique(url);
    try {
        const reply = await query('INSERT INTO urlhash(url, hash) VALUES ($1, $2)', [url, hash]);
        res.status(201).json({ res: reply, hashUrl: `https://bit.ly/${hash}`});
    } catch(err) {
        res.status(500).json({ error: err, message: 'Unable to input url and hash values into database.' });
    }
    endConnect();
});

router.get('/get', async (req, res) => {
    const hashUrl = req.url;
    const hash = hashUrl.split('/').pop();
    try {
        const reply = await query('SELECT url FROM urlhash WHERE hash = $1', [hash]);
    } catch(err) {
        res.status(500).json({ error: err, message: 'Unable to retrieve url for hash.'});
    }
    endConnect();
})

module.exports = router;