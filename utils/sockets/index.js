module.exports = async (io) => {
  console.log("Sockets ON");
  io.on("connection", (socket) => {
    socket.on("inicio", async (data) => {
      console.log(`CONNECT-USER-${data}`);
      socket.join(`CONNECT-USER-${data}`);
    });

    socket.on("generateQuote", async (data) => {
        console.log(data);
      });
  });
};
