import { resolve as resolveURL } from "dns";
import express from "express";

const server = express();

function checkDomain(url) {
  return new Promise((resolve, reject) => {
    resolveURL(url, error => {
      error ? resolve(false) : resolve(true);
    });
  });
}

server.get("*/:domain", async (request, response) => {
  const { domain } = request.params;

  const result = !(await checkDomain(domain));

  return response.status(200).send({
    domain,
    free: result
  });
});

const port = 4000;

server.listen(port, () => {
  console.log(`\n\n\tRodando na porta ${port}\n`);
});
