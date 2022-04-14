const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const people = require('./people');
const Person = people.model;

const choreSchema = new mongoose.Schema({
    name: String,
    description: String,
    day: String,
    done: Boolean,
    person: {
        type: mongoose.Schema.ObjectId,
        ref: 'Person'
    }
});

const Chore = mongoose.model('Chore', choreSchema);

router.param('chore', async (req, res, next, id) => {
    const choreId = mongoose.Types.ObjectId(id);
    try {
        const chore = await Chore.findById(choreId).populate('person')
        req.chore = chore;
        return next();
    } catch (err) {
        console.log(err)
        return res.status(500).send(err)
    }
});

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

/**
 * needs
 * {
 *  name,
 *  description,
 *  day,
 * }
 */
router.post('/person/:person', async (req, res) => {
    console.log(req.body)
    if(!req.body.name || !req.body.description || !req.body.day)
        return res.sendStatus(400)
    try {
        const chore = new Chore({
            name: req.body.name,
            description: req.body.description,
            day: req.body.day,
            done: false,
            person: req.person
        })
        await chore.save()
        return res.send(chore)
    } catch(err) {
        console.log(err)
        return res.status(500).send(err)
    }
})

router.put('/:chore', async (req, res) => {
    try {
        req.chore.done = req.body.done;
        await req.chore.save()
        return res.sendStatus(200)
    } catch(err) {
        console.log(err)
    }
})

router.get('/person/:person', async (req, res) => {
    try {
        let chores = await Chore.find({
            person: req.person
        }).populate('person')
        return res.send(chores)
    } catch(err) {
        console.log(err)
        return res.status(500).send(err)
    }
})

router.delete('/:chore', async (req, res) => {
    try {
        await Chore.deleteOne({_id: req.chore._id})
        return res.sendStatus(200)
    } catch (err) {
        console.log(err)
        return res.status(500).send(err)
    }
})

module.exports = {
    routes: router,
    model: Chore
}
