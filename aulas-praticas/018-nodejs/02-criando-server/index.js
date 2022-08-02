const http = require('http');
const host = 'http://localhost';
const port = 3000;
const stats = require('./pcRamUsage');

http.createServer((req, res) => {
    let url = req.url;

    // / é a pasta root
    if (url === '/stats'){
        res.end(JSON.stringify(stats, null, 2));
    } else {
        res.end(`<h1>Oi! Tudo bem?</h1>
                 <p>Siga para /stats para ver alguns dados do seu computador!</p>`)
    }

}).listen(port, () => console.log(`Server is running in ${host}:${port}`));