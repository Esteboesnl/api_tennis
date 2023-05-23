const express= require('express')
const app =express()
const cours = require('./cours.json')
const reservations = require('./reservations.json')

// Affichage de tous les cours
app.get('/cours', (req, res) => { res.status(200).json(cours) })

// Affichage d'un cour en particulier
app.get('/cours/:id', (req, res) => {
const id = parseInt(req.params.id)
const cour = cours.find(cour => cour.id === id)
res.status(200).json(cour)
})

// Suppression d'un cours de tennis
app.delete('/cours/:id', (req, res) => {
    const id = parseInt(req.params.id)
    let cours = cours.find(cours => cours.id === id)
    cours.splice(cours.indexOf(cours), 1)
    res.status(200).json(cours)
})

// Prendre une réservation pour un cours de tennis
app.post('/reservations', (req, res) => {
    console.log(req.body)
    reservations.push(req.body) 
    res.status(200).json(reservations)
})

// Lister l'ensemble des réservations
app.get('/reservations', (req, res) => { res.status(200).json(reservations) })

// Afficher les détails d'une réservation en particulier 
app.get('/reservations/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const reservation = reservations.find(reservation => reservation.id === id)
    res.status(200).json(reservation)
    })

// Permet de nous informer dans la console que le serveur en écoute
app.listen(8080, () => { console.log("Serveur à l'écoute") })