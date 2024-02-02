const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello, World!\n');
});

const PORT = 3000;
const IP_Address = '***.***.***.***'
server.listen(PORT, IP_Address, () => {
  console.log(`Server running at http://${IP_Address}:${PORT}/`);
});
