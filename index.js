let http = require('http');

let server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
  res.end('bobo head, <b>bobo</b>')
})

const PORT = 3000;
const URL = 'localhost';

server.listen(PORT,URL, () =>{
  console.log (`Сервер запущен: ${URL}:${PORT}`)
})