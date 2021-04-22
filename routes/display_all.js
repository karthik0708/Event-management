const express = require('express');
const router = express.Router();

const banquet = require('../models/banquet');
const caterer = require('../models/caterer');
const photographer = require('../models/photographer');

router.get('/customer/dis_ban', (req, res) => {
    banquet.find({
        company:{$ne:null},
        tel: {$ne:null}, 
        capacity: {$ne:null}, 
        cost: {$ne:null},
        about: {$ne:null}
    }).then((data) => {
        res.json(data);
    })
});

router.get('/customer/dis_cater', (req, res) => {
    caterer.find({
        company:{$ne:null},
        tel: {$ne:null}, 
        cuisines: {$ne:null}, 
        cost: {$ne:null},
        about: {$ne:null}
    }).then((data) => {
        res.json(data);
    })
});

router.get('/customer/dis_photo', (req, res) => {
    photographer.find({
        company:{$ne:null},
        tel: {$ne:null}, 
        charge: {$ne:null},
        about: {$ne:null}
    }).then((data) => {
        res.json(data);
    })
});

module.exports = router;