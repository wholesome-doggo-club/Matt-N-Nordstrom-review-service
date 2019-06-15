const sequelize = require('./indexSQL.js');
const Sequelize = require('sequelize');

const ReviewSchema = sequelize.define('documents', {
  // attributes
  itemname: {
    type: Sequelize.STRING,
    allowNull: false
  },
  reviews: {
    type: Sequelize.STRING(10000),
    allowNull: false

  }
}, {timestamps:false});

sequelize.sync({force: false}); 
 

module.exports = ReviewSchema;


// reviews=# COPY documents(itemname, reviews)
// reviews-# FROM '/Users/mattnguyen/hrla29/hrla29-front-end-capstone/sdc/Matt-N-Nordstrom-review-service/database/postgres/postgresSeed.csv' DELIMITER '|' CSV HEADER;
