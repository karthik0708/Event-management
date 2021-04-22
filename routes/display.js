const express = require('express');
const router = express.Router();

const banquet = require('../models/banquet');
const caterer = require('../models/caterer');
const photographer = require('../models/photographer');

router.get('/caterer/display', (req, res) => {
    caterer.find({
        email:req.query.email,
        name:req.query.name
    }
    ).then((data) => {
        dis={
            title: data[0].company, 
            tel: data[0].tel, 
            type: data[0].cuisines, 
            cost: data[0].cost,
            content: data[0].about
        }
        res.json(dis);
    })
});

router.get('/banquet/display', (req, res) => {
    banquet.find({
        email:req.query.email,
        name:req.query.name
    }
    ).then((data) => {
        dis={
            title: data[0].company, 
            tel: data[0].tel, 
            type: data[0].capacity, 
            cost: data[0].cost,
            content: data[0].about
        }
        res.json(dis);
    })
});

router.get('/photographer/display', (req, res) => {
    photographer.find({
        email:req.query.email,
        name:req.query.name
    }
    ).then((data) => {
        dis={
            title: data[0].company, 
            tel: data[0].tel, 
            cost: data[0].charge,
            content: data[0].about
        }
        res.json(dis);
    })
});


module.exports = router;