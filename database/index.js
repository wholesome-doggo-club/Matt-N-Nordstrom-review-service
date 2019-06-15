const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/reviews', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('db connected!')
});

var reviewSchema = new mongoose.Schema({
  id: Number,
  reviews: Array
});

const review = mongoose.model('reviewSchema', reviewSchema);

module.exports = {
  db,
  review
}

// mongoimport --db reviews --collection reviewSchema --numInsertionWorkers 4 --file myOutput3.json