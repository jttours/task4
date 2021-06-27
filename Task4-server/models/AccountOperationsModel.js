let mongoose = require('mongoose');



// AccountOperations Schema
const AccountOperationsModel = mongoose.model('AccountOperationsModel', {
    accountNumber: {
        type: Number,
    }, 
    amount: {
        type: Number,
    },
    transactionType: {
        type: String,
        enum: ['deposit','withdrawal','loan']
    },
    transactionDate: {
        type: Date,
    },
    interestRate: {
        type: Number,
    },
    numberOfPayments: {
        type: Number,
    }

});



module.exports = { AccountOperationsModel };