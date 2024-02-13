const { Health } = require('../models');

const getAllHealth = async (req,res) => {
    try {
        const healths = await Health.find()
        res.json(healths)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}


const getHealthById = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        const health = await Health.findById(id);
        if (health) {
            return res.json(step);
        }
        return res.status(404).send('Health not found!');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createHealth = async (req, res) => {
    try {
        const health = await new Health(req.body);
        await health.save();
        return res.status(201).json({step,});

    } catch (error) {
        return res.status(500).json({ error: error.message});
    }
}

const updateHealth = async (req, res) => {
    try {
        let { id } = req.params;
        let health = await Health.findByIdAndUpdate(id, req.body, { new: true })
        if (health) {
            return res.status(200).json(health)
        }
        throw new Error ("Health not found!")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteHealth = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Health.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Health deleted");
        }
        throw new Error("Health not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAllHealth,
    getHealthById,
    createHealth,
    updateHealth,
    deleteHealth
}