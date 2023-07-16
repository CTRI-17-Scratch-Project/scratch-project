const express = require('express');
const textController = require('../controllers/textController');

const textRouter = express.Router();

textRouter.post('/', textController.sendText, (req, res, next) => {
	console.log('I am in the textRouter post handler function');
	return res.status(200).json(res.locals.newMessage);
});
// const client = require('twilio')(accountSid, authToken);

module.exports = textRouter;
