const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

app.get('/', (req, res) => {
  res.send('Servidor do Gartic Caótico a funcionar a todo o gás!');
});

io.on('connection', (socket) => {
  console.log('Um jogador conectou-se:', socket.id);

  socket.on('disconnect', () => {
    console.log('Um jogador desconectou-se:', socket.id);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Servidor a correr na porta ${PORT}`);
});
