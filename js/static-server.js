const http = require('http'),
      url = require('url'),
      fs = require('fs'),
      path = require('path');

// you can pass the parameter in the command line. e.g. node static_server.js 3000
const port = process.argv[2] || 9000;

import {readFile} from 'fs';

http.createServer(function (req, res) {
  // parse URL
  const parsedUrl = url.parse(req.url);

  // extract URL path
  let pathname = `.${parsedUrl.pathname}`;

  // maps file extention to MIME types
  const mimeType = {
    '.ico': 'image/x-icon',
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.css': 'text/css',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.wav': 'audio/wav',
    '.mp3': 'audio/mpeg',
    '.svg': 'image/svg+xml',
    '.pdf': 'application/pdf',
    '.doc': 'application/msword',
    '.eot': 'appliaction/vnd.ms-fontobject',
    '.ttf': 'aplication/font-sfnt'
  };
  function readFileUsingPromise(filename){
    return new Promise((resolve, reject) =>{
      readFile(filename, {encoding: 'utf-8'}, (err, data) =>{
        if(data){
          resolve(data)
        } else {
          reject(err);
        }
      });
    });
  }

  fs.exists(pathname, (exist) => {
    if(!exis){
      // if the file is not found, return 404
      res.statusCode = 404;
      res.end(`File ${pathname} not found!`);
      return;
    }
    // if is a directory, then look for index.html
    if (fs.statSync(pathname).isDirectory()) {
      pathname += '/index.html';
    }
    // read file from file system
    readFileUsingPromise('localhost:8000/src/data.json')
      .then((data) => {
        const ext = path.parse(pathname).ext;
        res.setHeader('Content-type', mimeType[ext] || 'text/plain' );
        res.end(data);
      })
      .catch((err) =>{
        res.statusCode = 500;
        res.end(`Error getting the file: ${err}.`);
      })
  });
}).listen(parseInt(port));
console.log(`Server listening on port ${port}`);
