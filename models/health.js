const { Schema } = require('mongoose')

const healthSchema = new Schema(
  {
    calorie: { type: String, required: true},
    health_benefit: { type: String, required: true},
    cuisine: { type: Schema.Types.ObjectId, ref: 'Cuisine' }

  },
  { timestamps: true }
)

module.exports = healthSchema