const express= require('express')
const app =express()
const parkings = require('./cours.json')

// Affichage de tous les cours
app.get('/cours', (req, res) => { res.status(200).json(parkings) })

// Affichage d'un cour en particulier
app.get('/cours/:id', (req, res) => {
const id = parseInt(req.params.id)
const parking = parkings.find(parking => parking.id === id)
res.status(200).json(parking)
})


// Suppression d'un cours de tennis
app.delete('/cours/:id', (req, res) => {
    const id = parseInt(req.params.id)
    let parking = parkings.find(parking => parking.id === id)
    parkings.splice(parkings.indexOf(parking), 1)
    res.status(200).json(parkings)
})

// Permet de nous informer dans la console que le serveur en écoute
app.listen(8080, () => { console.log("Serveur à l'écoute") })