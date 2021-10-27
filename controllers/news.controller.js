const News = require("../models/News.model")

const newsController = {
  addNews: async (req, res) => {
    try {
      await News.create({
        headline: req.body.headline,
        text: req.body.text,
        category: req.body.category,
      })
      res.json("Новость добавлена")
    } catch (e) {
      res.json("Ошибка")
    }
  },
  deleteNewsById: async (req, res) => {
    try {
      await News.findByIdAndRemove(req.params.id)
      res.json("Новость удалена")
    } catch (e) {
      res.json("Ошибка")
    }
  },
  updateNewsById: async (req, res) => {
    try {
      await News.findByIdAndUpdate(req.params.id, { $set: req.body })
      res.json("Новость изменена")
    } catch (e) {
      res.json("Ошибка")
    }
  },
  getNewsById: async (req, res) => {
    try {
      const news = await News.findById(req.params.id)
      res.json(news)
    } catch (e) {
      res.json("Ошибка")
    }
  },
  getAllNews: async (req, res) => {
    try {
      const news = await News.find()
      res.json(news)
    } catch (e) {
      res.json("Ошибка")
    }
  },
  getNewsByCategory: async (req, res) => {
    try {
      const news = await News.find({ category: req.params.id })
      res.json(news)
    } catch (e) {
      res.json("Ошибка")
    }
  },
}

module.exports = newsController