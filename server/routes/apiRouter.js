const express = require('express');
const axios = require('axios');
const apiController = require('../controllers/apiController');

const apiRouter = express.Router();

apiRouter.get(
  '/',
  apiController.getPlantData,
  //   apiController.handlePlantData,
  (req, res) => {
    return res.status(200).json(res.locals.plantData);
  }
);

module.exports = apiRouter;
