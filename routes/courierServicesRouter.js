const express = require('express');
const router = express();

const courierServices = require('../services/servicesCouriersServices');
const courierService = new courierServices();

const validatorHandler = require('../middlewares/validation');
const { servicesByCourier } = require('../schemas/courierServiceSchema');
const { checkRoles } = require('../middlewares/auth');

router.get('/byCourier/:carrierName',
    validatorHandler(servicesByCourier,"params"),
    checkRoles(["admin","customer"]),
    async (req, res, next ) => {
        try {
            const { carrierName } = req.params
            res.send(await courierService.getServicesByCourier(carrierName));
        } catch (error) {
            next(error);
        }
});

module.exports = router;