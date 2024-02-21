const { config } = require('../config/config');
const { apiRequest } = require("./request");

class CouriersServices {

    constructor(){
        this.queriesUrlEnvia = config.queriesUrlEnvia;
        this.token = config.tokenEnvia;
        this.apiUrlEnvia = config.apiUrlEnvia;
    }

    async getCouriersMX(){
        const request = await apiRequest(
            this.token,
            this.queriesUrlEnvia,
            "carrier?country_code=MX",
            "GET"
        )
        return request
    }
}

module.exports = CouriersServices;