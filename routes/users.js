const express = require("express");
const router = express.Router()
const user_controller = require("../controllers/user_controller")

router.get("/profile",user_controller.users);
router.get("/signup",user_controller.signup);
router.get("/signin",user_controller.signin);
router.get("/signout",user_controller.signout);
router.post("/create",user_controller.create);
router.post("/login",user_controller.login);


module.exports = router;