require("dotenv").config();
let express = require("express");
let app = express();
let user = require("./controllers/usercontroller");
let address = require("./controllers/addresscontroller");
const sequelize = require("./db.js");
sequelize.sync({ force: true });

app.use(require("./middleware/headers.js"));
app.use(express.json());
app.use("/user", user);
app.use("/address", address);

app.listen(3000, () => console.log("Sever is running!"));
