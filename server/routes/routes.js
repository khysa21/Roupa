const router = require("express").Router();
const user = require('../controllers/UserController');
const auth = require('../middleware/auth');
const item = require('../controllers/ItemController');

router.post("/login", user.login  );
router.post("/logout", user.logout );
router.post("/register", user.createUser );
router.get("/getUser", user.getUser );
router.get("/getAllItems", item.getAllItems );
router.post("/createItem", item.createItem );

module.exports = router;