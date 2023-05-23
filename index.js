const express= require('express')
const app =express()
const parkings = require('./cours.json')
// Routes
app.get('/cours', (req, res) => { res.status(200).json(parkings) })
app.get('/cours/:id', (req, res) => {
const id = parseInt(req.params.id)
const parking = parkings.find(parking => parking.id === id)
res.status(200).json(parking)
})





app.listen(8080, () => { console.log("Serveur à l'écoute") })