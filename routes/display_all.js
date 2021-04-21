const express = require('express');
const router = express.Router();

const banquet = require('../models/banquet');
const caterer = require('../models/caterer');
const photographer = require('../models/photographer');

router.get('/customer/dis_ban', (req, res) => {
    banquet.find().then((data) => {
        res.json(data);
    })
});

router.get('/customer/dis_cater', (req, res) => {
    caterer.find().then((data) => {
        res.json(data);
    })
});

router.get('/customer/dis_photo', (req, res) => {
    photographer.find().then((data) => {
        res.json(data);
    })
});

module.exports = router;