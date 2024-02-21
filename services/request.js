const axios = require("axios");

const apiRequest = async (token, baseURL, path, method, data) => {
  const configuration = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await axios({
      method: method,
      url: `${baseURL}${path}`,
      data: data,
      headers: configuration.headers,
    });

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

module.exports = { apiRequest };
