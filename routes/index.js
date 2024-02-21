const express = require("express");
const passport = require("passport");
//SERVICES
const authRoute = require("./authRouter");
const userService = require("./usersRouter");
const couriers = require("./couriersRouter");
const couriersServices = require("./courierServicesRouter");
const shippingServices = require("./shippingRouter");

const mainRouter = (app) => {
  const router = express.Router(); // PERMITE PETICIONES HTTP
  app.use("/api/v1", router); // Define el path
  router.use("/auth", authRoute); // Le menciono que endpoints va usar para (/api/v1)/auth

  // router.use(passport.authenticate('jwt', { session: false }));// Proteger rutas, solo las que  estan debajo de esta linea

  router.use("/users", userService);
  router.use("/couriers", couriers);
  router.use("/courierServices", couriersServices);
  router.use("/shipping", shippingServices);
};

module.exports = mainRouter;
