const { config } = require('./config/config');
const express = require('express');
const app = express();
const mainRouter = require('./routes');
const cors =  require('cors');
const { errorBoom, errorSequelize, error } = require('./middlewares/error');
//sockets
const socketIo = require("socket.io");
const socketMain = require("./utils/sockets");
const http = require("http");

require('./utils/auth');

app.use(cors());
app.use(express.json());
mainRouter(app);
app.use(errorBoom, errorSequelize, error);

const server = http.createServer();
const io = socketIo(server, {
  cors: {
    origin: "*",
  },
});
socketMain(io);
server.listen(config.socket);

app.listen(config.port, () => {
  console.log(`listening on ${config.port}`);
});
