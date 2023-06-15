require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require('mongoose');
require("./db/connection");
const cookieParser = require('cookie-parser');

const Products =("./models/productsSchema");

const DefaultData = require("./defaultdata");
const cors = require("cors");
const router = require("./routes/router");

app.use(express.json());
app.use(cookieParser(""));
app.use(cors());
app.use(router);

const port =process.env.PORT || 8000;

const server = app.listen(port, ()=>{

    console.log(`server is running on port number ${port}`);
});
server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

DefaultData()
