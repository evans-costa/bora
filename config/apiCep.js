const axios = require("axios");

const apiCep = axios.create({
  baseURL: "https://brasilapi.com.br/api",
});

module.exports = apiCep;
