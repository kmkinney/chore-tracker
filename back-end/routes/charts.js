const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const chartSchema = mongoose.Schema({
    name: String,
    people: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Person',
    }]
})

const Chart = mongoose.model('Chart', chartSchema)

const people = require('./people')
const Person = people.model

router.param('chart', async (req, res, next, id) => {
    const chartId = mongoose.Types.ObjectId(id);
    try {
        const chart = await Chart.findById(chartId).populate('people')
        req.chart = chart;
        return next();
    } catch (err) {
        console.log(err)
        return res.status(500).send(err)
    }
})
/**
 * Needs: 
 * {
 *  name: str,
 *  people: [{
 *      name: str
 * }]
 * }
 */
router.post('/', async (req, res) => {
    if(!req.body.name || !req.body.people)
        return res.status(400).send("missing fields")
    try {
        let people = []
        for(p of req.body.people) {
            let person =  new Person({
                name: p.name,
            })
            await person.save()
            console.log(person)
            people.push(person)
        }

        let chart = new Chart({
            name: req.body.name,
            people: people,
        })
        await chart.save()
        return res.send(chart)
    } catch(err) {
        console.log(err)
        return res.status(500).send(err)
    }
})

router.get('/', async (req, res) => {
    try {
        let charts = await Chart.find()
        return res.send(charts)
    } catch(err) {
        return res.status(500).send(err)
    }
})

router.get('/:chart', (req, res) => {
   res.send(req.chart)
})

module.exports = {
    routes: router,
    model: Chart
};
