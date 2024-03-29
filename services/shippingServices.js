const { config } = require("../config/config");
const { apiRequest } = require("./request");

class ShippingServices {
  constructor() {
    this.queriesUrlEnvia = config.queriesUrlEnvia;
    this.token = config.tokenEnvia;
    this.apiUrlEnvia = config.apiUrlEnvia;
  }

  async generateQuoteShipment(data) {
    const request = await apiRequest(
      this.token,
      this.apiUrlEnvia,
      `ship/rate/`,
      "POST",
      data
    );
    return request;
  }
}

module.exports = ShippingServices;
