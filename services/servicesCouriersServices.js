const { config } = require("../config/config");
const { apiRequest } = require("./request");

class ServicesCouriers {
  constructor() {
    this.queriesUrlEnvia = config.queriesUrlEnvia;
    this.token = config.tokenEnvia;
    this.apiUrlEnvia = config.apiUrlEnvia;
  }

  async getServicesByCourier(carrierName) {
    const request = await apiRequest(
      this.token,
      this.queriesUrlEnvia,
      `service/${carrierName}?country_code=MX`,
      "GET",
    );
    return request;
  }
}

module.exports = ServicesCouriers;
