const express = require('express');
const router = express();

const courierService = require('../services/couriersServices');
const courier = new courierService();

const { checkRoles } = require('../middlewares/auth');

router.get('/',
    checkRoles(["admin", "customer"]),
    async (req, res, next ) => {
    try {
        res.send(await courier.getCouriersMX());
    } catch (error) {
        next(error);
    }
});

module.exports = router;