const mongoose = require("mongoose")

const commentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  text: String,
  news: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "News",
    required: true,
  },
})

const Comment = mongoose.model("Comment", commentSchema)
module.exports = Comment