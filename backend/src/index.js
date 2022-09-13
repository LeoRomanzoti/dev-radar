const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");

const app = express();

mongoose.connect(
    "mongodb://omnistack:omnistack@ac-mutu4rp-shard-00-00.fpsg18v.mongodb.net:27017,ac-mutu4rp-shard-00-01.fpsg18v.mongodb.net:27017,ac-mutu4rp-shard-00-02.fpsg18v.mongodb.net:27017/?ssl=true&replicaSet=atlas-frpexd-shard-0&authSource=admin&retryWrites=true&w=majority"
);

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
