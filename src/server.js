const http = require('node:http');
const os = require('node:os');
const { add, isEven } = require('./math');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (url.pathname === '/health') {
    res.writeHead(200);
    return res.end('ok\n');
  }

  if (url.pathname === '/add') {
    const a = Number(url.searchParams.get('a'));
    const b = Number(url.searchParams.get('b'));
    res.writeHead(200);
    return res.end(`${a} + ${b} = ${add(a, b)} (even: ${isEven(add(a, b))})\n`);
  }

  res.writeHead(200);
  res.end(`Hello world version 2 from ci-learn! Served by: ${os.hostname()}\n`);
});

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
