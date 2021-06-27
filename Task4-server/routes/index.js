const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;    

const { SampleModel } = require('../models/sampleModel');


// Get All 
router.get('/api/samplemodel', (req, res) => {
    SampleModel.find({}, (err, data) => {
        if(!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    });
});


// Get Single record

router.get('/api/samplemodel/:id', (req, res) => {
    SampleModel.findById(req.params.id, (err, data) => {
        if(!err) {
            res.send(data);
        } else {
           console.log(err);
        }
    });
});


// Get Single record (2nd Way)

// router.get('/api/samplemodel/:id', (req, res) => {
//     if(!ObjectId.isValid(req.params.id))
//     return res.status(400).send(`No record With Given ID : ${req.params.id}`);

//     Employee.findById(req.params.id, (err, data) => {
//         if(!err) {
//             res.send(data);
//         } else {
//            console.log(err);
//         }
//     });
// });


// Save Record of smaplemodel
router.post('/api/samplemodel/add', (req, res) => {
    const sample = new SampleModel({
        name: req.body.name,
        email: req.body.email,
        salary: req.body.salary
    });
    sample.save((err, data) => {
        if(!err) {
            // res.send(data);
            res.status(200).json({code: 200, message: 'Model Added Successfully', addSampleModel: data})
        } else {
           console.log(err);
        }
    });
});



// Update record of samplemodel

router.put('/api/samplemodel/update/:id', (req, res) => {


    const sample = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    };
    SampleModel.findByIdAndUpdate(req.params.id, { $set: sample }, { new: true }, (err, data) => {
        if(!err) {
            res.status(200).json({code: 200, message: 'Model Updated Successfully', updateSampleModel: data})
        } else {
            console.log(err);
        }
    });
});





// Delete record of smaplemodel
router.delete('/api/samplemodel/:id', (req, res) => {

    SampleModel.findByIdAndRemove(req.params.id, (err, data) => {
        if(!err) {
            // res.send(data);
            res.status(200).json({code: 200, message: 'Model deleted', deleteSampleModel: data})
        } else {
            console.log(err);
        }
    });
});


module.exports = router;