const { Schema } = require('mongoose')

const cuisineSchema = new Schema(
  {
    url: { type: String, required: true },
    name: { type: String, required: true },
    history: { type: String, required: true}
  },
  { timestamps: true }
)


module.exports = cuisineSchema