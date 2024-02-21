const express = require('express');
const userService = require('./usersRouter');
const passport = require('passport');
const authRoute = require('./authRouter');

const mainRouter = (app)=>{
    const router = express.Router(); // PERMITE PETICIONES HTTP
    app.use('/api/v1', router); // Define el path 
        router.use('/auth',authRoute); // Le menciono que endpoints va usar para (/api/v1)/auth

        router.use(passport.authenticate('jwt', { session: false }));// Proteger rutas, solo las que  estan debajo de esta linea

        router.use('/users', userService);
}

module.exports =  mainRouter ;