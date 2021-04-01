let express = require("express");
let router = express.Router();
const validateSession = require("../middleware/validate-session");
const Address = require("../db").import("../models/address");

router.post("/create", validateSession, function (req, res) {
  console.log(req.user.id);
  const addressEntry = {
    street: req.body.street,
    state: req.body.state,
    zipcode: req.body.zipcode,
    city: req.body.city,
    userId: req.user.id,
  };
  Address.create(addressEntry)
    .then((address) => res.status(200).json(address))
    .catch((err) => res.status(500).json({ error: err }));
});
module.exports = router;
