const express = require('express');
const mongoose = require('mongoose');
const app = express();

const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes/user')

mongoose.connect('mongodb+srv://axel:zsyxBpMduRJkvB7G@cluster0.c8ych5h.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


app.use(express.json());



app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });


app.use('/api/stuff', stuffRoutes)
app.use('/api/auth', userRoutes)


module.exports = app;
