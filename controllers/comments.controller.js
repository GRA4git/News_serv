const Comment = require("../models/Comment.model")

const commentsController = {
  addCommentByNews: async (req, res) => {
    try {
      await Comment.create({
        name: req.body.name,
        text: req.body.text,
        news: req.params.id,
      })
      res.json("Комментарий добавлен")
    } catch (e) {
      res.json("Ошибка")
    }
  },
  deleteCommentById: async (req, res) => {
    try {
      await Comment.findByIdAndRemove(req.params.id)
      res.json("Комментарий удален")
    } catch (e) {
      res.json("Ошибка")
    }
  },

  getCommentsByNews: async (req, res) => {
    try {
      const comments = await Comment.find({ news: req.params.id })
      res.json(comments)
    } catch (e) {
      res.json("Ошибка")
    }
  },
}

module.exports = commentsController