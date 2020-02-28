const cors = require("cors");
const server = require("express")();

server.use(cors());
server.use(require("./routes"));

const port = process.env.PORT || 4000;

server.listen(port, () => {
  console.log(`\n\n\tServer running on port ${port}\n`);
});
