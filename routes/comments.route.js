const { Router } = require("express")
const commentsController = require("../controllers/comments.controller")

const router = Router()

router.post("/add/news/:id", commentsController.addCommentByNews)
router.delete("/:id", commentsController.deleteCommentById)
router.get("/get/news/:id", commentsController.getCommentsByNews)

module.exports = router