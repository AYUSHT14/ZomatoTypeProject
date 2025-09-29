const express = require("express");
const foodController = require("../controllers/food.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const router = express.Router();
const multer = require("multer")

const upload = multer({
    storage: multer.memoryStorage(),
});
// POST /api/food/ [protected, food partner only] - Add a new food item
router.post('/', authMiddleware.authFoodPartnerMiddleware,
    upload.single("video") ,
    foodController.createFood);

//GET /api/food/ - Get all food items
router.get('/',
    authMiddleware.authUserMiddleware,
    foodController.getFoodItems
)

module.exports = router;

