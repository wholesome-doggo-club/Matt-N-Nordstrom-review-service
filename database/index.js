const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/FEC_Nordstrom', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('db connected!')
});

var reviewSchema = new mongoose.Schema({
  nickName: {
    type: String,
    required: true
  },

  rating: {
    type: Number,
    required: true
  },

  title: {
    type: String,
    required: true
  },

  body: {
    type: String,
    required: true
  },

  fit: {
    type: Number,
    required: true
  }  
}, {timestamps: true});

const review = mongoose.model('Reviews', reviewSchema);

module.exports = {
  db,
  review
}