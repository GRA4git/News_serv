const { Router } = require("express")
const newsController = require("../controllers/news.controller")

const router = Router()

router.post("/", newsController.addNews)
router.delete("/:id", newsController.deleteNewsById)
router.patch("/:id", newsController.updateNewsById)
router.get("/:id", newsController.getNewsById)
router.get("/", newsController.getAllNews)
router.get("/get/category/:id", newsController.getNewsByCategory)

module.exports = router