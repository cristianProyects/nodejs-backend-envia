const express = require('express');
const router = express();

const shippingService = require('../services/shippingServices');
const shipping = new shippingService();


const { checkRoles } = require('../middlewares/auth');

router.post('/generateQuote',
    checkRoles(["admin", "customer"]),
    async (req, res, next ) => {
    try {
        res.send(await shipping.generateQuoteShipment(req.body));
    } catch (error) {
        next(error);
    }
});

module.exports = router;