const mongoose = require('mongoose');
const express = require('express');
const { restart } = require('nodemon');
const router = express.Router();

const personSchema = new mongoose.Schema({
    name: String,
})

const Person = mongoose.model('Person', personSchema);

router.param('person', async (req, res, next, id) => {
    const personId = mongoose.Types.ObjectId(id);
    try {
        const person = await Person.findById(personId)
        req.person = person;
        return next();
    } catch (err) {
        console.log(err)
        return res.status(500).send(err)
    }
})

/* GET users listing. */
router.get('/:person', function (req, res) {
    res.send(req.person);
});

router.get('/', async (req, res) => {
    try {
        let people = await Person.find()
        return res.send(people)
    } catch(err) {
        console.log(err)
        return res.status(500).send(err)
    }
})

router.post('/', async (req, res) => {
    console.log(req.body)
    if(!req.body.name)
        return res.status(400).send("missing fields")
    const person = new Person({
        name: req.body.name
    })
    try {
        await person.save()
        return res.sendStatus(200)
    } catch(err) {
        console.log(err)
        return res.status(500).send(err)
    }
})

module.exports = {
    model: Person,
    routes: router,
}
