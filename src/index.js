import cors from "cors";
import express from "express";

import routes from "./routes.js";

const server = express();

server.use(cors());
server.use(routes);

const port = process.env.PORT || 4000;

server.listen(port, () => {
  console.log(`\n\n\tServer running on port ${port}\n`);
});
