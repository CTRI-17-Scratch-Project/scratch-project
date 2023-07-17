const express = require('express');
const textController = require('../controllers/textController');
const userController = require('../controllers/userController');

const textRouter = express.Router();

textRouter.post(

  '/',
  textController.sendText,
  //userController.updateNotifications,
  (req, res) => {
    console.log('I am in the textRouter post handler function');
    console.log(res.locals.newMessage);
    return res.status(200).json(res.locals.newMessage);
  }

);

textRouter.patch('/', userController.updateNotifications, (req, res) => {
	console.log('I am in the textRouter patch handler function');
	return res.status(200).json(res.locals.updatedNotifications);
});

module.exports = textRouter;
