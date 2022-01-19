/**
 * api.defaults.headers.authorization = `Bearer ${token}`;
 * https://blog.rocketseat.com.br/axios-um-cliente-http-full-stack/
 *
 * @author PabloFlanmarion
 */
const axios = require("axios");
const config = require("../config/config");

/**
 * Configuração para Client do Axios.
 */
const api = axios.create({
  baseURL: config.BASE_URL,
  responseType: "json",
  maxRedirects: 5,
});

class TokenClient {}
class ResumeClient {
  constructor({ token_access }) {
    this.token = token_access;
  }
}

/**
 * Metodo para recuperar o Response Completo do Token.
 *
 * @param {*} service
 * @returns Promises
 */
exports.getMSAToken = async (service) => {
  const response = (await api.get(`/v1/${service}`)).data;
  return response;
};

/**
 * Metodo para recuperar apenas o dado do Token do Response.
 *
 * @param {*} service
 * @returns Promises
 */
exports.getMSAResumeToken = async (service) => {
  const response = new ResumeClient((await api.get(`/v1/${service}`)).data.data)
    .token;
  return response;
};
