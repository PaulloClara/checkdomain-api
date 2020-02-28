import express from "express";

const server = express();

server.get("/", (request, response) => {
  return response.status(200).send({
    status: "OK"
  });
});

const port = 4000;

server.listen(port, () => {
  console.log(`\n\n\tRodando na porta ${port}\n`);
});
