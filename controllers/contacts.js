const dbConnect = require('../dbConnect')
const express = require('express');


//Requêtes sur la table contacts.
let contact = {};

//Requete sur la table contacts pour toutes les récupèrer
contact.findAllContacts = () => {
  return new Promise((resolve, reject) => {
    dbConnect.query('SELECT c.*, e.entname FROM contacts as c, entreprises as e WHERE c.entreprises_identreprises = e.identreprises', (err, res) => {
      if (err) return reject(err);
      return resolve(res);
    });
  });
};

//Query sur la table contacts pour récupérer un contact avec un paramètre id.
contact.onlyOneContact = id => {
  return new Promise((resolve, reject) => {
    dbConnect.query('SELECT * FROM contacts, entreprises.entname WHERE contacts.entreprises_identreprises = entreprises.identreprises, id_contact = ?', [id], (err, res) => {
      if (err) return reject(err);
      return resolve(res);
    });
  });
};
// contact.onlyOneContact = id => {
//   return new Promise((resolve, reject) => {
//     dbConnect.query('SELECT * FROM contacts WHERE id_contact = ?', [id], (err, res) => {
//       if (err) return reject(err);
//       return resolve(res);
//     });
//   });
// };


//Query sur la table contact pour créer un contact.
contact.newContact = contact => {
  return new Promise((resolve, reject) => {
    const data = [
      contact.ctsurname,
      contact.ctname,
      contact.ctadress,
      contact.ctzip,
      contact.ctcity,
      contact.ctemail,
      contact.ctfunction,
      contact.ctphone,
      contact.entreprises_identreprises,
    ];
    const query =
      'INSERT INTO contacts (ctsurname, ctname, ctadress, ctzip, ctcity, ctemail, ctfunction, ctphone, entreprises_identreprises) VALUES (?, ?, ?, ?, ?, ?, ?,?,?)';
      dbConnect.query(query, data, (err, res) => {
      if (err) return reject(err);
      resolve(res);
    });
  });
};

//Query sur la table contact pour mettre à jour un contact avec un paramètre id.
contact.updateContact = (contact, id) => {
  return new Promise((resolve, reject) => {
    const data = [
      contact.ctsurname,
      contact.ctname,
      contact.ctadress,
      contact.ctzip,
      contact.ctcity,
      contact.ctemail,
      contact.ctfunction,
      contact.ctphone,
      contact.entreprises_identreprises,
      id
    ];
    const query =
      'UPDATE contacts SET ctsurname = ?, ctname = ?, ctadress = ?, ctzip = ?, ctcity = ?, ctemail = ?, ctfunction = ?, ctphone = ?, entreprises_identreprises = ? WHERE id_contact= ?';
      dbConnect.query(query, data, (err, res) => {
      if (err) return reject(err);
      resolve(res);
    });
  });
};

//Query sur la table contacts pour supprimer une contact avec un paramètre id.
contact.deleteOneContact = id => {
  return new Promise((resolve, reject) => {
    dbConnect.query('DELETE FROM contacts WHERE id_contact = ?', [id], (err, res) => {
      if (err) return reject(err);
      resolve(res[0]);
    });
  });
};

module.exports = contact;