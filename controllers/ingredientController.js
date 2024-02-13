const { Ingredient } = require('../models');

const getAllIngredient = async (req,res) => {
    try {
        const ingredients = await Ingredient.find()
        res.json(ingredients)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}


const getIngredientById = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        const ingredient = await Ingredient.findById(id);
        if (ingredient) {
            return res.json(ingredient);
        }
        return res.status(404).send('Ingredient not found!');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createIngredient = async (req, res) => {
    try {
        const ingredient = await new Ingredient(req.body);
        await ingredient.save();
        return res.status(201).json({ingredient,});

    } catch (error) {
        return res.status(500).json({ error: error.message});
    }
}

const updateIngredient = async (req, res) => {
    try {
        let { id } = req.params;
        let ingredient = await Ingredient.findByIdAndUpdate(id, req.body, { new: true })
        if (ingredient) {
            return res.status(200).json(ingredient)
        }
        throw new Error ("Ingredient not found!")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteIngredient = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Ingredient.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Ingredient deleted");
        }
        throw new Error("Ingredient not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAllIngredient,
    getIngredientById,
    createIngredient,
    updateIngredient,
    deleteIngredient
}