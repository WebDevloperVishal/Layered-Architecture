const express = require("express");
const cors = require("cors");

const config = require("./config");

const apiRoutes = require("./routes/index.Router.js")

const app = express();

app.use(cors({
    origin: config.cors.origin,
    credentials: config.cors.credentials,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
}))

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

app.use(config.api.prefix, apiRoutes)

app.get("/", (req,res) => {
    res.json({
        message: "Layered_Architecture",
        success: true
    })
})

module.exports = app