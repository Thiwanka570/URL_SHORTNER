const express = require('express');
const shortId = require('shortid');
const Url = require('../models/Url');

const router = express.Router();

router.post('/shorten', async (req, res) => {
    const { url } = req.body;
    // console.log(url);
    
    const validUrlPattern = /^(http|https):\/\/[^ "]+$/;
    if (!validUrlPattern.test(url)) {
        return res.status(400).json({ error: 'Invalid URL' });
    }

    const existingUrl = await Url.findOne({ originalUrl: url });
    if (existingUrl) {
        return res.json({ shortendUrl: `${req.protocol}://${req.get('host')}/${existingUrl.shortendUrl}` });
    }

    const shortedUrl = shortId.generate();
    const newUrl = new Url({
        originalUrl: url,
        shortendUrl: shortedUrl,
    });

    try {
        await newUrl.save();
        res.json({ shortendUrl: `${req.protocol}://${req.get('host')}/${shortedUrl}` });
    } catch (error) {
        res.status(500).json({ error: 'Failed to shorten URL' });
    }


});

router.get('/:shortedUrl', async (req, res) => {
    const { shortedUrl } = req.params;
    // console.log(shortedUrl);
    
    try {
        const urlRecord = await Url.findOne({ shortendUrl: shortedUrl });
        if (!urlRecord) {
            return res.status(404).json({ error: 'URL not found' });
        }

        res.redirect(urlRecord.originalUrl);

    } catch (error) {
        // console.error(err);
        res.status(500).json({ error: 'Something went wrong' });
    }

})

module.exports = router;