const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
var bodyParser = require('body-parser')
require('dotenv').config()
const db = require('./config/db.config')
const router = require('./routes')

app.use(bodyParser.urlencoded({extended: true}))
app.use(router)
app.set('views', './views')
app.set('view engine', 'ejs')

app.use(session({
  resave: true, 
  saveUninitialized: true, 
  secret: 'somesecret', 
  cookie: { maxAge: 60000 }}));

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('chat message', msg => {
    io.emit('chat message', msg)
  })
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});