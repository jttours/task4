const express = require('express');
const cors = require('cors');


const app = express();
app.use(cors());

const mongoose = require('./db/mongoose');

const PORT = 5500;

app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello World');
});


// Routes
app.use('/', require('./routes/index'));




app.listen(PORT, () => console.log(`started at port ${PORT}`));