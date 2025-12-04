const express = require("express");
const cors = require("cors");

const config = require("./config");

const app = express();

app.use(cors({
    origin: config.cors.origin,
    credentials: config.cors.credentials,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
}))

