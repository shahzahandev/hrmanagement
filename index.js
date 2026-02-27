require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const app = express()
const port = process.env.PORT || 8000
app.use(express.json())

app.get('/main', (req, res) => {
    res.send("Hello Developers.")
})

mongoose.connect(process.env.DB_URl)
.then(() => {
    console.log(`MongoDB database connected.`);   
})

console.log(process.env.PORT);
// console.log(process.env.DB_URL);

app.listen(8000, (req, res) => {
    console.log(`Server is running on port ${port}`); 
})