const express = require('express');
const app = express();
const port = 9000;
const cors = require("cors");
app.use(cors()); // to accept command from any whwre
app.use(express.json({ limit: "50mb" }));
const { CasparCG, AMCP, Options, } = require("casparcg-connection");
var aa = new CasparCG("127.0.0.1", 5250);
aa.queueMode = Options.QueueMode.SEQUENTIAL;// for server 2.07
app.post("/endpoint", async (req, res) => {
  await aa.do(new AMCP.CustomCommand(req.body.string))
  res.end(); // for finish a command
});
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
