const { version } = require("mongoose");

require("dotenv").config();

const config = {
    port: process.env.PORT || 8080,

    mongodb: {
        uri: process.env.MONGODB_URL,
    },

    api: {
        prefix: "/api",
        version: "v1"
    },


    cors: {
        origin: process.env.CORS_ORIGIN || '*',
        Credentials: true
    }

}