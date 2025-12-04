const app = require("./App.js");
const config = require("./config");
const dbConfig = require("./config/db.js");

const startServer = async ()=>{
    try {
        await dbConfig.connect()

        app.listen(config.port, () => {
            console.log("Server Started ✅");
        });

    } catch (error) {
        console.error("Failed to start server", error);
        process.exit(1);
    }
}

startServer();