const { Schema } = require('mongoose')

const ingredientSchema = new Schema(
  {
    ingredients: { type: String, required: true},
    cuisine: { type: Schema.Types.ObjectId, ref: 'Cuisine' }

  },
  { timestamps: true }
)

module.exports = ingredientSchema