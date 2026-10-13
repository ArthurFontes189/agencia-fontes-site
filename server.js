import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const server = http.createServer((req, res) => {
  let filePath = path.join(__dirname, req.url === '/' ? 'PALETA-VISUAL.html' : req.url);
  const extname = path.extname(filePath);
  let contentType = 'text/html';
  
  if (extname === '.css') contentType = 'text/css';
  if (extname === '.js') contentType = 'application/javascript';
  
  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('404 Not Found');
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    }
  });
});

server.listen(8001, () => {
  console.log('Servidor rodando em http://localhost:8001');
});
