const express = require("express");
const router = express.Router();


const toolbarRoutes = require("./toolbox.Route.js");

router.use("/tools", toolbarRoutes)


module.exports = router;