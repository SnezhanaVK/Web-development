const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    const filePath = path.join(__dirname, 'file.txt');
    const stat = fs.statSync(filePath);

    res.writeHead(200, {
      'Content-Type': 'text/plain',
      'Content-Length': stat.size
    });

    const readStream = fs.createReadStream(filePath);
    readStream.pipe(res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Не найдено');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Сервер, работает по адресу http://localhost:${port}/`);
});