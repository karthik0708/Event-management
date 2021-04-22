const express = require('express');
const router = express.Router();

const cart = require('../models/cart');

router.get('/customer/cart_items', (req, res) => {
    cart.find().then((data) => {
        res.json(data)
    })
});

module.exports = router;