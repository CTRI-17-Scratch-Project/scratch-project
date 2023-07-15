const express = require('express');

//TODO: require relevant controller(s)

const dbRouter = express.Router();

dbRouter.get('/', (req, res) => {
  console.log('I am in the router to the database (GET)');
  return res.status(200).json({});
});

dbRouter.post('/', (req, res) => {
  console.log('I am in the router to the database (POST)');
  return res.status(200).json({});
});

dbRouter.delete('/', (req, res) => {
  console.log('I am in the router to the database (DELETE)');
  return res.status(200).json({});
});

dbRouter.patch('/', (req, res) => {
  console.log('I am in the router to the database (PATCH)');
  return res.status(200).json({});
});

module.exports = dbRouter;
