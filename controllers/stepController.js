const { Step } = require('../models');

const getAllStep = async (req,res) => {
    try {
        const steps = await Step.find()
        res.json(steps)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}


const getStepById = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        const step = await Step.findById(id);
        if (step) {
            return res.json(step);
        }
        return res.status(404).send('Step not found!');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createStep = async (req, res) => {
    try {
        const step = await new Step(req.body);
        await step.save();
        return res.status(201).json({step,});

    } catch (error) {
        return res.status(500).json({ error: error.message});
    }
}

const updateStep = async (req, res) => {
    try {
        let { id } = req.params;
        let step = await Step.findByIdAndUpdate(id, req.body, { new: true })
        if (step) {
            return res.status(200).json(step)
        }
        throw new Error ("Step not found!")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteStep = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Step.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Step deleted");
        }
        throw new Error("Step not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAllStep,
    getStepById,
    createStep,
    updateStep,
    deleteStep
}