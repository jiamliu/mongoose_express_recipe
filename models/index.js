const mongoose = require('mongoose')
const cuisineSchema = require('./cuisine')
const ingredientSchema = require('./ingredient')
const stepSchema = require('./step')
const healthSchema = require('./health')




const Cuisine = mongoose.model('Cuisine', cuisineSchema)
const Ingredient = mongoose.model('Ingredient', ingredientSchema)
const Step = mongoose.model('Step', stepSchema)
const Health = mongoose.model('Health', healthSchema)

module.exports = {
  Cuisine,
  Ingredient,
  Step,
  Health
}