const express = require('express');
const mongoose = require('mongoose');
const { Reaction, Thought, User } = require('./models');

const app = express();

const PORT = process.env.PORT || 3001;

mongoose.connect('mongodb+srv://nanifer:monsp1dergo@cluster0.i3o3tur.mongodb.net/socialNetworkDB?retryWrites=true&w=majority')
  .then(() => {
    console.log('Mongoose is happy!!!!');
  })
  .catch(err => console.log(err));

app.use(express.json());
app.use(express.urlencoded({extended: true}));


  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });