const Joi = require('joi');

const carrierName = Joi.string();

const servicesByCourier = Joi.object({
    carrierName: carrierName.required(),
});

module.exports = {  servicesByCourier }