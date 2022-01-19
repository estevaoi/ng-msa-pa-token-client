const client = require("./src/client/TokenClient");

exports.client = client;

/**
 * Testes


client.getMSAToken("perfil").then((res) => {
  console.log("####### Exemplo getMSAToken #######");
  console.log(res);
});

client.getMSAResumeToken("perfil").then((res) => {
  console.log("####### Exemplo getMSAResumeToken #######");
  console.log(res);
});
*/
