const router = require("express").Router();
const user = require('../controllers/UserController');
const auth = require('../middleware/auth');
const item = require('../controllers/ItemController');

router.post("/login", user.login  );
router.post("/logout", user.logout );
router.post("/register", user.createUser );
router.get("/getUser", user.getUser );
router.get("/getitems", item.getAllItems );
router.post("/createItem", item.createItem );
router.post("/image", item.uploadImage, (req, res) =>{
  if(req.file) return res.json({msg: 'uploaded file'})
} );

module.exports = router;