const fs = require('fs');
const app = require('../app');
const https = require('https');

let port = 443;

const options = {
    key: fs.readFileSync('keys/myCloseKey.key'),
    cert: fs.readFileSync('keys/myOpenKey.crt')
}

let server = https.createServer(options, app);

server.listen(port, () => {
    console.log("server successfully started");
})


