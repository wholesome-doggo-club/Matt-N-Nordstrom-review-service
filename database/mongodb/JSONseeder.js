var fs = require('fs');
const faker = require('faker');

let obj = {};

function reviewSeeder() {
  let reviewCount = Math.floor(Math.random() * (10 - 5) + 4)
  let item = obj['id'] = counter;
  let reviewsArr = obj['reviews'] = [];

  let itemName = faker.commerce.productName();
  for(var i = 0; i < reviewCount; i++) {
    let review = {
      id: i,
      itemName: itemName,
      name: faker.name.findName(),
      rating: faker.random.number(5),
      title: faker.commerce.productAdjective(),
      body: faker.lorem.sentences(),
      fit: faker.random.number(5)
    }
    reviewsArr.push(review)
  }
}

let counter = 0;

const writeStream = fs.createWriteStream('myOutput5.json');
(async() => {
  
  while(counter < 10000000) {
    if(counter === 0) {
      writeStream.write('[')
    }
    reviewSeeder()
    counter++
      const ableToWrite = writeStream.write(JSON.stringify(obj, null, 2) + (counter === 10000000 ? ']' : ','));
      obj = {};
      if (!ableToWrite) {
          await new Promise(resolve => {
              writeStream.once('drain', resolve);
          });
      }
}
})();


// nickName(name)
// rating(1-5)
// title(text)
// body(paragraph)
// fit(?)

// mongoimport --host ec2-18-219-249-85.us-east-2.compute.amazonaws.com --port 27017 --db reviews --collection reviewschemas --file myOutput5.json --jsonArray
 

