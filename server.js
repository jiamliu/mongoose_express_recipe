const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3009
const db = require('./db')


const { Cuisine } = require('./models')
const { Ingredient } = require('./models')
const { Step } = require('./models')
const { Health } = require('./models')

//declare constants for cuisine controller
const controllers1 = require('./controllers/cuisineController')

//declare constants for ingredient controller
const controllers2 = require('./controllers/ingredientController')

//declare constants for step controller
const controllers3 = require('./controllers/stepController')

//declare constants for step controller
const controllers4 = require('./controllers/healthController')



const app = express()

app.use(cors())
app.use(express.json())


//these are regular page views
app.get('/', (req, res) => {
  res.send('This is the landing page!')
})

app.get('/cuisines', async (req, res) => {
    const cuisines = await Cuisine.find({})
    res.json(cuisines)
  })

app.get('/ingredients', async (req, res) => {
    const ingredients = await Ingredient.find({})
    res.json(ingredients)
})

app.get('/steps', async (req, res) => {
  const steps = await Step.find({})
  res.json(steps)
})

app.get('/health', async (req, res) => {
  const health = await Health.find({})
  res.json(health)
})


app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})

//these are controllers for cuisine specifically

app.get('/cuisines', controllers1.getAllCuisines)
app.get('/cuisines/:id', controllers1.getCuisineById)
app.post('/cuisines', controllers1.createCuisine)
app.put('/cuisines/:id',controllers1.updateCuisine)
app.delete('/cuisines/:id',controllers1.deleteCuisine)

//these are controllers for ingredients specifically

app.get('/ingredients', controllers2.getAllIngredient)
app.get('/ingredients/:id', controllers2.getIngredientById)
app.post('/ingredients', controllers2.createIngredient)
app.put('/ingredients/:id',controllers2.updateIngredient)
app.delete('/ingredients/:id',controllers2.deleteIngredient)

//these are controllers for step specifically

app.get('/steps', controllers3.getAllStep)
app.get('/steps/:id', controllers3.getStepById)
app.post('/steps', controllers3.createStep)
app.put('/steps/:id',controllers3.updateStep)
app.delete('/steps/:id',controllers3.deleteStep)

//these are controllers for step specifically

app.get('/health', controllers4.getAllHealth)
app.get('/health/:id', controllers4.getHealthById)
app.post('/health', controllers4.createHealth)
app.put('/health/:id',controllers4.updateHealth)
app.delete('/health/:id',controllers4.deleteHealth)
