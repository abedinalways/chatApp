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
  socket.on('send_message', (msg) => {
    console.log(msg);
  socket.broadcast.emit("receive-message", msg)
  })
})
server.listen(3001, () => {
  console.log('server is running on port 3001')
})