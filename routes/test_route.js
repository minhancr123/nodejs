const express = require("express");
const test_controller = require("../controllers/test_controller");

const route = express.Router();

route.get("/test-user" , test_controller);

module.exports = route;


