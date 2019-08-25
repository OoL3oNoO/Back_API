const express = require('express');
const routerContacts = express.Router();
const contact = require('../controllers/contacts');
const dbConnect = require('../dbConnect')

////////////////////////////// CONTACTS ////////////////////////////////////////////


// requête sur la table contacts pour récupérer tous les contacts
routerContacts.get('/', async function (req, res) {
  try{
    let result = await contact.findAllContacts();
    res.json(result);
  }catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

// requête sur la table contacts pour récupérer un contacts
routerContacts.get('/:id', async function (req, res) {
  try{
  let result = await contact.onlyOneContact(req.params.id)
  res.json(result);
}catch (err){
  console.log(err)
  res.sendStatus(500);
}
});

// Ajoute un nouveau contact  
routerContacts.post('/', async function (req, res){
  try{
    let result = await contact.newContact(req.body)
    res.json(result);
  }catch (err){
    console.log(err)
    res.sendStatus(500);
  }
});

//  Met à jour un  contact avec id
routerContacts.put('/:id', async function (req, res) {
try{
let result = await contact.updateContact(req.body, req.params.id)
res.json(result);
}catch (err){
  console.log(err)
  res.sendStatus(500);
}
});

//  Supprime un contact
routerContacts.delete('/:id', async function (req, res) {
  try {
    let result = await contact.deleteOneContact(req.params.id);
    res.json(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

module.exports= routerContacts;
