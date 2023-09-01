const express = require("express");
const router = express.Router();
const user = require('./users')
const home_controller = require("../controllers/home_controller").home

router.get("/",home_controller);
router.use('/users',user)

module.exports = router;

