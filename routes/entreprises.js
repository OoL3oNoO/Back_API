
// const routerEntreprises = require('express').Router();
const express = require('express');
const routerEntreprises = express.Router();
const entreprise = require('../controllers/entreprises');
const dbConnect = require('../dbConnect')
/////////////////////////////// ENTREPRISES /////////////////////////////////////


// requête sur la table entreprises pour récupérer toutes les entreprises
routerEntreprises.get('/', async function (req, res) {
  try{
    let result = await entreprise.findAllEntreprises();
    res.json(result);
  }catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
})
  // requête sur la table entreprises pour récupérer une entreprise avec id
routerEntreprises.get('/:id', async function (req, res) {
  try{
    let result = await entreprise.onlyOneEntreprise(req.params.id)
  res.json(result);
}catch (err){
  console.log(err)
  res.sendStatus(500);
}
});
  // Ajoute une entreprise  
routerEntreprises.post('/', async function (req, res) {
  try{
    let result = await entreprise.newEntreprise(req.body)
    res.json(result);
  }catch (err){
    console.log(err)
    res.sendStatus(500);
  }
});
  //  modifie une entreprise avec l'id
routerEntreprises.put('/:id', async function (req, res) {
  try{
    let result = await entreprise.updateEntreprise(req.body, req.params.id)
    res.json(result);
    }catch (err){
      console.log(err)
      res.sendStatus(500);
    }
});
  //  supprime une entreprise avec l'id
routerEntreprises.delete('/:id', async function (req, res) {
  try {
    let result = await entreprise.deleteOneEntreprise(req.params.id);
    res.json(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});
  module.exports=routerEntreprises
