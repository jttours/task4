const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;    


const { AccountOperationsModel } = require('../models/AccountOperationsModel');





// Get all transactions for a specific account number

router.get('/api/operations/:accountNumber', (req, res) => {
    AccountOperationsModel.find({accountNumber : req.params.accountNumber}, (err, data) => {
        if(!err) {
            res.send(data);
        } else {
           console.log(err);
        }
    });
});




// Save transaction for a specific bank account
router.post('/api/operations/add', (req, res) => {
    //console.log(req.bod)
    const account = new AccountOperationsModel({
        accountNumber: req.body.accountNumber,
        transactionType: req.body.transactionType,
        amount: req.body.amount,
        transactionDate: req.body.transactionDate,
        interestRate: req.body.interestRate,
        numberOfPayments: req.body.numberOfPayments,
    });
    account.save((err, data) => {
        if(!err) {
            // res.send(data);
            res.status(200).json({code: 200, message: 'Model Added Successfully', addAccountOperation: data})
        } else {
           console.log(err);
        }
    });
});



module.exports = router;