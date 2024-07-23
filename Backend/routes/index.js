const authRoute = require("./auth.Routes");
const express = require("express");

const allRoutes = express.Router();

allRoutes.use();

allRoutes('/auth', authRoute);

module.exports = allRoutes;
