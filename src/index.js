import express from "express";
import routes from "./routes.js";

const server = express();

server.use(routes);

const port = process.env.PORT || 4000;

server.listen(port, () => {
  console.log(`\n\n\tRodando na porta ${port}\n`);
});
