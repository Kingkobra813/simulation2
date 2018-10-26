const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
const cors = require("cors");
require("dotenv").config();

const controller = require("./controller");
const app = express();

app.use(bodyParser.json());
app.use(cors());

massive(process.env.CONNECTION_STRING)
    .then(dbInstance => {
        app.set("db", dbInstance);
    })
    .catch(err => console.log(err));

app.get("/api/houses", controller.getHouses)
app.post("/api/home", controller.makeHome)
app.delete("/api/home/:id", controller.deleteHome)

app.listen(3005, () => {
    console.log("Yep we are Listening on 3005");
});