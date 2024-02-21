const express = require("express");
const passport = require("passport");
const jsonWebToken = require("jsonwebtoken");
const { config } = require("../config/config");

const router = express.Router();

router.get(
  "/verify/:token",
  async (req, res, next) => {
    try {
        const { token } = req.params;
        jsonWebToken.verify(token, config.jwtSecret);
        return res.status(200).json({ message: 'Autorizado'});
      } catch (error) {
        return res.status(401).json({ message: 'Unauthorized', });
      }
  },
);
router.post(
  "/login",
  passport.authenticate("local", { session: false }),
  async (req, res, next) => {
    console.log(1);
    try {
      const user = req.user;
      const payload = {
        sub: user.id,
        role: user.role,
        // expiresIn: 1000
      };
      const token = jsonWebToken.sign(payload, config.jwtSecret);
      res.json({
        user,
        token,
      });
    } catch (error) {
      next(error);
    }
  },
);

module.exports = router;
