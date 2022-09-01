require('dotenv').config();
const { Thought, User } = require('../models');
const thoughts = require('./thoughts');
const users = require('./users');
const mongoose = require("mongoose");

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.i3o3tur.mongodb.net/socialNetworkDB?retryWrites=true&w=majority`)
  .then(() => {
    console.log('Mongoose is happy!!!!');
  })
  .catch(err => console.log(err));

async function seedingDB () {
    await User.deleteMany({});

    const allUsers = await User.insertMany(users);
    console.log("seeded Users")
    await Thought.deleteMany({});

    const allThought = await Thought.insertMany(thoughts);
    console.log("seeded Thoughts")
    process.exit(0)
}

seedingDB()