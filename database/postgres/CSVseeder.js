var fs = require('fs');
const faker = require('faker');

// let obj = {};

function reviewSeeder() {
  let reviewCount = Math.floor(Math.random() * (10 - 5) + 4)
  // let item = obj['id'] = counter;
  // let reviewsArr = obj['reviews'] = [];
  let array = [];

  // let itemName = faker.commerce.productName();
  for(var i = 0; i < reviewCount; i++) {
    let review = {
      id: i,
      name: faker.name.findName(),
      rating: faker.random.number(5),
      title: faker.commerce.productAdjective(),
      body: faker.lorem.sentences(),
      fit: faker.random.number(5)
    }
    array.push(review)
  }
  return array
}

let counter = 0;

const writeStream = fs.createWriteStream('postgresSeed2.csv');
(async() => {
  
  while(counter < 1) {
    if(counter === 0) {
      writeStream.write('itemName|reviews' + '\n')
    }
    let itemName = faker.commerce.productName();
    // reviewSeeder()
    counter++
      const ableToWrite = writeStream.write(JSON.stringify(itemName) + '|' + JSON.stringify(reviewSeeder()) + (counter === 1 ? '' : '\n'));
      obj = {};
      if (!ableToWrite) {
          await new Promise(resolve => {
              writeStream.once('drain', resolve);
          });
      }
}
})();

// COPY documents(itemname, reviews)
// FROM '/Users/mattnguyen/hrla29/hrla29-front-end-capstone/sdc/Matt-N-Nordstrom-review-service/database/postgres/postgresSeed.csv' DELIMITER '|' CSV HEADER;


// nickName(name)
// rating(1-5)
// title(text)
// body(paragraph)
// fit(?)

