//Import d'express et d'autres dépendances nécessaires au fonctionnement de l'application.
const express = require('express');
//Import de cors pour le traitement des requêtes provenant de domaine differents, placer avant la création du serveur.
var cors = require('cors');
//La variable express nous permettra d'utiliser les fonctionnalités du module Express. 
const app = express();

const bodyParser = require('body-parser');
// utilisation de cors
app.use(cors())
//Utilisation du middleware bodyParser pour pouvoir traiter les requêtes.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//Import des routes de l'API.
const routerAccueil = require('./routes/accueil');
const routerContacts = require('./routes/contacts');
const routerEntreprises = require('./routes/entreprises');

//Route de bienvenue : utilise la routes définies dans l'index de ./routes, avec le point de départ api/v1/
app.use('/v1/', routerAccueil);
//Routes d'accès aux entreprises :
app.use('/v1/entreprises', routerEntreprises);
//Routes d'accès aux contacts:
app.use('/v1/contacts', routerContacts);

module.exports = app;
