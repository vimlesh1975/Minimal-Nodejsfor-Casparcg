const express = require('express');
const app = express();
const port = 9000;
const cors = require("cors");
app.use(cors()); // to accept command from any whwre
app.use(express.json({ limit: "50mb" }));
const { CasparCG, AMCP, Options, } = require("casparcg-connection");
var aa = new CasparCG("127.0.0.1", 5250);
aa.queueMode = Options.QueueMode.SEQUENTIAL;// for server 2.07

var playlist=[{filename:'amb', s3:'s3url'}, {filename:'red', s3:'s3url2'}];

app.post('/endpoint', (req, res) => {
  aa.do(new AMCP.CustomCommand(req.body.string))
    .then((aa1) => {
      // console.log(aa1.response.raw);
    })
    .catch((aa2) => {
      // console.log(aa2.response.raw)
    });
  res.end();
});

app.post('/playlist', (req, res) => {
 playlist=req.body.string;
  res.end();
});

app.get('/playlist', (req, res) => {
 res.json({ playlist: playlist });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
