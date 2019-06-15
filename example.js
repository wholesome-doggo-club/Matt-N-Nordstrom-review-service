const fake = require('faker');
const Model = require('../database/models/details.js');
const mongoose = require('mongoose');
require('events').EventEmitter.prototype._maxListeners = 1000;

async function reviewSeeder(outer, inner) {
  let counter = 0;
  for (let j = 0; j < outer; j++) {
    let inputArr = [];
    for (let i = 0; i < inner; i++) {
      let obj = {
        id: counter,
        details: fake.lorem.paragraphs(),
        photos: [`${fake.image.imageUrl()}?random=${Date.now() * Math.random()}`, `${fake.image.imageUrl()}?random=${Date.now() * Math.random()}`, `${fake.image.imageUrl()}?random=${Date.now() * Math.random()}`],
      };
      inputArr.push(obj);
      counter++;
    }
    console.log('done');
    await Model.Details.insertMany(inputArr);
  }
}