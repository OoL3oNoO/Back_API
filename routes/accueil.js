const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const accueil =
    "Bienvenue sur le systeme de gestion TRECOBAT";
  res.send(accueil);
});

module.exports = router;

