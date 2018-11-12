const server  = require("express");
const path = require("path");

const app = express();

app.use(server.static(__dirname,'/dist/nhl-fantasy-trade-tool'));

app.get('/*', (req, res) => {

    res.sendFile(path.join(__dirname,'/dist/nhl-fantasy-trade-tool/index.html'))
});

app.listen(process.env.PORT || 5000);