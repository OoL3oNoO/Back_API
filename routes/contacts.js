const routerContacts = require('express').Router();



////////////////////////////// CONTACTS ////////////////////////////////////////////


// requête sur la table contacts pour récupérer tous les contacts
routerContacts.get('/', function (req, res) {
  res.send('Liste des contacts')
})

// requête sur la table contacts pour récupérer un contacts
routerContacts.get('/:id', function (req, res) {


  res.send('Liste un contact spécifique');
});

// Ajoute un nouveau contact  
routerContacts.post('/', function (req, res) {
  res.send('Création du premier contact');
});

//  Met à jour un  contact avec id
routerContacts.post('/:id', function (req, res) {
  res.send('Modifie un contact spécifique');
});

//  Supprime un contact
routerContacts.delete('/:id', function (req, res) {
  res.send('Efface un contact spécifique');
});

module.exports= routerContacts
