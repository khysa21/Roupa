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
router.post("/image", item.uploadImage.single('file'), (req, res) => {
  const file = req.file;
  if (!file) {
    const error = new Error('Please upload a file');
    error.httpStatusCode = 400;
    return next(error);
  }
  res.send(file);
} ); 
router.post("/update", item.updateItem );

module.exports = router;