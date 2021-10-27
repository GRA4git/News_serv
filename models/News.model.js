const mongoose = require("mongoose")

const newsSchema = mongoose.Schema({
  headline: {
    type: String,
    required: true,
  },
  text: String,
  category: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Category",
    required: true,
  },
})

const News = mongoose.model("News", newsSchema)

module.exports = News