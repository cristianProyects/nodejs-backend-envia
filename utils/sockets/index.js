const shippingService = require("../../services/shippingServices");
const shipping = new shippingService();

module.exports = async (io) => {
  console.log("Sockets ON");
  io.on("connection", (socket) => {
    socket.on("inicio", async (data) => {
      socket.join(`CONNECT-USER-${data}`); // JOIN ROOM
    });

    socket.on("generateQuote", async (data) => {
        // Get data for  generateQuote
      const response = await shipping.generateQuoteShipment(data); // Generate quote
     
      if (response){ 
        socket.emit("count", 1); // For response add one more for count
    }
    });
  });
};
