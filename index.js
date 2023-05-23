const express= require('express')
const app =express()
const parkings = require('./cours.json')
// Routes
app.get('/cours', (req,res) => { res.status(200).json(parkings)})



app.listen(8080, () => { console.log("Serveur à l'écoute") })