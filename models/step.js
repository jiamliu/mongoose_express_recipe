const { Schema } = require('mongoose')

const stepSchema = new Schema(
  {
    steps: { type: String, required: true},
    cuisine: { type: Schema.Types.ObjectId, ref: 'Cuisine' }

  },
  { timestamps: true }
)

module.exports = stepSchema