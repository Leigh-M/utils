/*
Deps:
    "express"
    "socket.io"
    "socket.io-client"
*/

const express = require('express');
const fs = require('fs');

const app = express();
app.get([/\/$/, /.*\.html$/], (req, res) => {
    let filename = __dirname + req.path;
    filename += filename.endsWith('/') ? 'index.html' : '';
    fs.readFile(filename, (_, data) => {
        res.send(`${ `${ data }<script src="/node_modules/socket.io-client/dist/socket.io.js"></script>` }<script>  var socket = io();  socket.on("file-change-event", function () {    window.location.reload();  });</script>`);
    });
});
app.use(express.static(__dirname));

const http = require('http').Server(app);

http.listen(3001);

const io = require('socket.io')(http);

fs.watch(__dirname, { recursive: true }, () => {
    io.emit('file-change-event');
});
