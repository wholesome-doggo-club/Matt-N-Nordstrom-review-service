const express = require('express')
const parser = require('body-parser')
const app = express()
const port = 3004
const path = require('path')


app.use(parser.urlencoded({ extended: true }))
app.use(parser.json())
app.use(express.static(path.join(__dirname, '../client/dist')));



//Raw Mongodb
const dbMongo = require('../database/mongodb/index.js')

app.get('/reviews', (req, res) => {
    let { id } = req.query;
    id = Number(id);
    let num = Math.floor(Math.random() * (9999999 - 9000000) + 9000000)
    dbMongo.get(num)
    .then(data => res.status(200).send(data))
    .catch(err => res.status(404).send('Error with fetch', err))  
  })


app.get('/loaderio-5b3a3d61e2ab3cebfdcfd968af8bc78a/', (req, res) => {
  res.status(200).send('loaderio-5b3a3d61e2ab3cebfdcfd968af8bc78a')
})

//Raw Postgres 
// const dbPostgres = require('../database/postgres/rawPostgres.js')
// app.get('/reviews', (req, res) => {
//     // let { id } = req.query;
//     // id = Number(id); 
//     let num = Math.floor(Math.random() * (9999999 - 9000000) + 9000000)
//     dbPostgres.query(`SELECT * FROM documents WHERE id = ${num}`, (error, results) => {
//       if (error) {
//         res.status(400).send('Error with fetch', error)
//       }
//       res.status(200).json(results.rows)
//     })
//   })

  
// Postgres - Sequelize
// const dbSQL = require('../database/postgres/indexSQL.js')
// const SQLmodel = require('../database/postgres/models.js')

// app.get('/reviews', (req, res) => {
//     // console.log("in get")
//     // const { id } = req.query;
//     let num = Math.floor(Math.random() * (9999999 - 9000000) + 9000000)
//     SQLmodel.findAll({ where: { id: num }})
//       .then((data) => res.status(200).send(data))
//       .catch(err => res.status(404).send("error getAll: ", err))
//   })


//Mongoose
// const db = require('../database/index.js'); 

//MONGO

// app.get('/reviews', (req, res) => {
//   const { id } = req.query;
//   db.review.find({id})

//   .then((data) => res.status(200).send(data))
//   .catch(err => res.status(400).send('Error with fetch', err))
// })


//POSTGRES

// app.get('/reviews', (req, res) => {
  //   console.log("in get")
  //   const { id } = req.query;
  //   SQLmodel.findAll({ where: { id }})
  //     .then((data) => res.status(200).send(data))
  //     .catch(err => res.status(404).send("error getAll: ", err))
  // })
  
  
  
  app.listen(port, () => {
    console.log(`Listening on port ${port}!`);
  })
  


  //ORIGINAL ROUTES

  // const seed = require('../database/seed.js')

  // app.get('/reviews', (req, res) => {
  //   console.log("in get")
  //   db.review.find({})
  //     .then((data) => res.status(200).send(data))
  //     .catch(err => res.status(404).send("error getAll: ", err))
  // })
  
  // app.post('/reviews', (req, res) => {``
  //   console.log("in post")
  //   const { nickName, title, body, rating, fit } = req.body
  //   db.review.create({
  //     nickName, title, body, rating, fit
  //   })
  //     .then(() => res.status(201).send("post ok"))
  //     .catch(err => res.status(404).send("error posting: ", err))
  // })
  
  // app.delete('/reviews/delete', (req, res) => {
  //   console.log("in deleteAll")
  //   db.review.deleteMany({})
  //     .then(() => {
  //       res.status(200).send("all deleted");
  //       seed.insertSampleReviews();
  //     })
  //     .catch(err => res.status(404).send("error deleting all: ", err))
  // })