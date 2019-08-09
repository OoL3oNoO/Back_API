// import createConnection from '/dbConnect'

// //Requêtes sur la table entreprise.
// let entreprise = {};

// //Query sur la table entreprise pour toutes les récupèrer
// entreprise.findAllEntreprises = () => {
//   return new Promise((resolve, reject) => {
//     createConnection.query('SELECT * FROM entreprises', (err, res) => {
//       if (err) return reject(err);
//       return resolve(res);
//     });
//   });
// };

// //Query sur la table entreprise pour récupérer une entreprise avec un paramètre id.
// entreprise.onlyOneEntreprise = id => {
//   return new Promise((resolve, reject) => {
//     createConnection.query('SELECT * FROM entreprises WHERE identreprises = ?', [id], (err, res) => {
//       if (err) return reject(err);
//       return resolve(res);
//     });
//   });
// };


// //Query sur la table entreprise pour créer une entreprise.
// entreprise.newEntreprise = entreprise => {
//   return new Promise((resolve, reject) => {
//     const params = [
//       entreprise.entname,
//       entreprise.entadress,
//       entreprise.entzip,
//       entreprise.entcity,
//       entreprise.entphone,
//       entreprise.entmail,
//       entreprise.entsiret,
//       entreprise.contacts_id_contact,
//     ];
//     const query =
//       'INSERT INTO entreprise (entname, entadress, entzip, entcity, entphone, entmail, entsiret, contacts_id_contact) VALUES (?, ?, ?, ?, ?, ?, ?)';
//       createConnection.query(query, params, (err, res) => {
//       if (err) return reject(err);
//       resolve(res);
//     });
//   });
// };

// //Query sur la table entreprise pour mettre à jour une entreprise avec un paramètre id.
// entreprise.updateEntreprise = (entreprise, id) => {
//   return new Promise((resolve, reject) => {
//     const params = [
//         entreprise.entname,
//         entreprise.entadress,
//         entreprise.entzip,
//         entreprise.entcity,
//         entreprise.entphone,
//         entreprise.entmail,
//         entreprise.entsiret,
//         entreprise.contacts_id_contact,
//       id,
//     ];
//     const query =
//       'UPDATE entreprise SET entname = ?, entadress = ?, entzip = ?, entcity = ?, entphone = ?, entmail = ?, entsiret = ?, contacts_id_contact = ? WHERE id = ?';
//       createConnection.query(query, params, (err, res) => {
//       if (err) return reject(err);
//       resolve(res);
//     });
//   });
// };

// //Query sur la table entreprise pour supprimer une entreprise avec un paramètre id.
// entreprise.deleteOneEntreprise = id => {
//   return new Promise((resolve, reject) => {
//     createConnection.query('DELETE FROM entreprises WHERE id = ?', [id], (err, res) => {
//       if (err) return reject(err);
//       resolve(res);
//     });
//   });
// };

// module.exports = entreprise;