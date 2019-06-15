const MongoClient = require('mongodb').MongoClient;


const url = 'mongodb://ec2-18-219-249-85.us-east-2.compute.amazonaws.com:27017';

// 'mongodb://localhost:27017'

//'mongodb://ec2-13-58-63-0.us-east-2.compute.amazonaws.com:27017';

const dbName = 'reviews';

let _db;


MongoClient.connect(url, {useNewUrlParser: true}, function(err, client) {
  if(err) {
    console.log('Error connecting to database', err)
  } 
  console.log("Connected successfully to raw mongo database");
  _db = client.db(dbName);
});


var dbHelpers = (id) => {
  return new Promise ((resolve, reject) => {
    _db.collection('reviewschemas').findOne({ id: id}, (err, items) => {
      if(err){
        reject({hello: 'hello world', ...err})
      } else{
        resolve(items)
      }
    })
  })
 }
 
 module.exports.get = dbHelpers;


