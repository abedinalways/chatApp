const express = require('express');
// const cors = require('cors');
const app = express();
// app.use(cors());
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server, {
  cors: {
    origin:'*',
  }
});

io.on('connection', (socket) => {
  console.log(`user is connected with the id: ${socket.id}`);
  // socket.on('message', (data) => {
  //   console.log(data)
  // })
})
server.listen(3001, () => {
  console.log('server is running on port 3001')
})