const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Router } = require("express");
const { User } = require("../models");
const validateSession = require("../middleware/validate-session");

const router = Router();
router.get("/get", function (req, res) {
  User.findAll({ where: { id: 1 }, include: ["babyinfo"] }).then(
    function findOneSuccess(data) {
      res.json(data);
    },
    function findOneError(err) {
      res.send(500, err.message);
    }
  );
});

router.post("/create", function (req, res) {
  User.create({
    username: req.body.username,
    passwordhash: bcrypt.hashSync(req.body.password, 13),
  })
    .then(function createSuccess(user) {
      let token = jwt.sign({ id: user.id, username: user.username }, "test", {
        expiresIn: 60 * 60 * 24,
      });
      res.json({
        user: user,
        message: "User Successfully Created",
        sessionToken: token,
      });
    })
    .catch(function (err) {
      res.status(500).json({ error: err });
    });
});

router.post("/login", function (req, res) {
  User.findOne({
    where: {
      username: req.body.username,
    },
  })
    .then(function loginSuccess(user) {
      if (user) {
        bcrypt.compare(req.body.password, user.passwordhash, function (
          err,
          matches
        ) {
          if (matches) {
            let token = jwt.sign(
              { id: user.id, username: user.username },
              "test",
              {
                expiresIn: 60 * 60 * 24,
              }
            );
            res.status(200).json({
              user: user,
              message: "User Successfully Logged in!",
              sessionToken: token,
            });
          } else {
            res.status(502).send({ error: "Login Failed" });
          }
        });
      } else {
        res.status(500).json({ error: "User does not exist" });
      }
    })
    .catch((err) => res.status(500).json({ error: err }));
});

module.exports = router;
