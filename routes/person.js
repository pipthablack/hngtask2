const express = require('express');
const router = express.Router();
const Person = require('../model.js')

// Get all persons
router.post('/person', async (req, res) => {
    try {
      const person = new Person(req.body);
      
      await person.save();
      res.status(201).json(person);
    } catch (error) {
      res.status(400).json({ error: 'Failed to create person' });
    }
  });

  //get all persons
  
  router.get('/persons/:name', async (req, res) => {
    try {
      const people = await Person.find({ name:req.params.name});
      if(people.length==0) {
      return res.status(404).json({ error: 'Person not found' })
      }
      res.status(200).json(people);
    } catch (error) {
      res.status(500).json({ error: 'Failed to get person' });
    }
  });
  
  // Get a single person by ID
  router.get('/person/:name', async (req, res) => {
    try {
        const name = req.params.name
      const person = await Person.findByName(name);
      if (!person) {
        return res.status(404).json({ error: 'Person not found' });
      }
      res.status(200).json(person);
    } catch (error) {
      res.status(500).json({ error: 'Failed to get person' });
    }
  });
  
  // Update a person by ID
  router.put('/person/:name', async (req, res) => {
    try {
      const person = await Person.findOneAndUpdate( { name:req.params.name }, req.body, {
        new: true,
      });
      
      if (!person) {
        return res.status(404).json({ error: 'Person not found' });
      }
      res.status(200).json(person);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update person' });
    }
  });
  
  // Delete a person by ID
  router.delete('/person/:name', async (req, res) => {
    try {
      const person = await Person.findOneAndRemove({ name:req.params.name });
      if (!person) {
        return res.status(404).json({ error: 'Person not found' });
      }
      res.status(200).send("user deleted successfully");
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete person' });
    }
  });

module.exports= router;