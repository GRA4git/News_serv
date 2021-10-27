const Category = require("../models/Category.model")

const categoriesController = {
  addCategory: async (req, res) => {
    try {
      await Category.create({
        name: req.body.name,
      })
      res.json("Категория добавлена")
    } catch (e) {
      res.json("Ошибка")
    }
  },
  deleteCategoryById: async (req, res) => {
    try {
      await Category.findByIdAndRemove(req.params.id)
      res.json("Категория удалена")
    } catch (e) {
      res.json("Ошибка")
    }
  },
  getAllCategories: async (req, res) => {
    try {
      const categories = await Category.find()
      res.json(categories)
    } catch (e) {
      res.json("Ошибка")
    }
  },
}

module.exports = categoriesController