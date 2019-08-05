
const routerEntreprises = require('express').Router();
/////////////////////////////// ENTREPRISES /////////////////////////////////////


// requête sur la table entreprises pour récupérer toutes les entreprises
routerEntreprises.get('/', function (req, res) {
  res.send('Liste les entreprises')
})
  // requête sur la table entreprises pour récupérer une entreprise avec id
routerEntreprises.get('/:id', function (req, res) {
  res.send('Liste une entreprise spécifique');
});
  // Ajoute une entreprise  
routerEntreprises.post('/', function (req, res) {
    res.send('Création de la première entreprise');
});
  //  modifie une entreprise avec l'id
routerEntreprises.post('/:id', function (req, res) {
  res.send('Modifie une entreprise spécifique');
});
  //  supprime une entreprise avec l'id
routerEntreprises.delete('/:id', function (req, res) {
  res.send('supprime une entreprise spécifique');
});
  module.exports=routerEntreprises












module.exports = routerEntreprises;
