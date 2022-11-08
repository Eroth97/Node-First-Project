var http = require('http');
var fs = require('fs');

const port = 8080;
const hostname = 'localhost';

const server = http.createServer((req, res) =>{
  switch(req.url){
    case '/':
      const index = fs.readFileSync('./index.html');
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end(index);
      break;
    case '/about':
      const about = fs.readFileSync('./about.html');
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end(about);
      break;
    case '/about.html':
      const about2 = fs.readFileSync('./about.html');
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end(about2);
      break;
    case '/contact-me':
      const contact = fs.readFileSync('./contact-me.html');
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end(contact);
      break;
    case '/contact-me.html':
      const contact2 = fs.readFileSync('./contact-me.html');
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end(contact2);
      break;
    default:
      const not_found = fs.readFileSync('./404.html');
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/html');
      res.end(not_found);
  }

});

server.listen(port, hostname, ()=>{
  console.log('Listening');
});