const express = require('express');
const router = express.Router();
const Person = require('../model.js')

// Get all persons
router.get('/person/getall',async (req,res)=>{
   Person.find({},(err,data)=>{
    if(!err) {
        res.send(data);
    } else {
        console.log(err)
    }
   });

});

 // get single person 
router.get('/person/getbyid/:id',async (req,res)=>{
    Person.findById(req.params.id,(err,data)=>{
        if(!err) {
            res.send(data);
        }
        else { 
            console.log(err)
        }
    });
})


   // save person

router.post('/person/add',(req,res)=>{
      const person= new Person({
        name:req.body.name
      });
      person.save((err,data)=>{
        if(!err){
            //res.send(data);
        res.status(200).json(data);
    }else {
        console.log(err)
    }
    });
})

// update person 
router.put('/person/update/:id',(req,res)=>{
    const per = {
        name: req.body.name
    };
    Person.findByIdAndUpdate(req.params.id,per,(err,data)=>{
        if(!err) {
            res.status(200).json(data);
        } else {
            console.log(err)
        }
       });
     })



     // delete person

    router.delete('/person/delete/:id',(req,res)=>{
        Person.findByIdAndDelete(req.params.id,(err,data)=>{
            if(!err) {
                res.status(200).json(data);
            } else {
                console.log(err)
            }
           });
        
        })  

module.exports= router;