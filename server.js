if (typeof PhusionPassenger !== 'undefined') {
  PhusionPassenger.configure({ autoInstall: false });
}

const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 3000;

const dotenv = require('dotenv');
dotenv.config();

// Utilisez le middleware CORS
app.use(cors());

// pour domaine spécifique
// app.use(cors({
//   origin: 'http://votre-domaine-autorise.com'
// }));

app.use(express.static(path.join(__dirname, 'dist')));

// for serve public content
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index.html');
});

if (typeof PhusionPassenger !== 'undefined') {
  app.listen('passenger');
} else {
  app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
  });
}
