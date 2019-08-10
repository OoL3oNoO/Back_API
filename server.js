const app = require('./app.js');

//Démarrage sur serveur :
app.listen(process.env.PORT || "3000", () => {
  console.log(`Server is running on port: ${process.env.PORT || "3000"}`);
});