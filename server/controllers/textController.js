// const axios = require('axios');
// const { text } = require('express');

// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(
	'ACb85b03fe9fcbe43adc47d0c4e875c3aa',
	'17e2c9a6ab06897a21c9b6ff8a84d3cb'
);

// const apiKey = process.env.TWILIO_API_KEY;
// const apiSecret = process.env.TWILIO_API_SECRET;
// const client = require('twilio')(
// 	'SKcc5096f507149b66c1ed0111545cae88',
// 	'cNKDpQo6bg25vujmTzsqT7r80ff69jFF',
// 	{ accountSid: 'AC63f9f3b4e15df2a836f2dbdb0e7269b4' }
// );

const textController = {};

textController.sendText = async (req, res, next) => {
	console.log('we are in the textController setupTexts');
	const { username, plant } = req.body;
	if (!username || !plant)
		return next({
			log: 'Error in textControllersetUpText',
			status: 400,
			message: { err: 'Error in request body!' },
		});

	try {
		const message = await client.messages.create({
			from: '+18449693100',
			messagingServiceSid: 'MG2583b9f6099fae31d8441512947c4e1d',
			body: `Hi, ${username}, Plant Daddy here! It is time to show your ${plant} some love!  Give your ${plant} about 1/4-1/3 of the pot's volume of water and rotate the pot for even sun exposure.  Finish off the job by whispering some sweet nothings into its leaves, and your ${plant} will keep thriving!`,
			to: '+12035544464',
			scheduleType: 'fixed',
			sendAt: new Date(Date.UTC(2023, 0o7, 16, 12, 0o2, 0o0)),
			'content-type': 'application/json',
		});
		console.log(message);
		res.locals.newMessage = message;
		next();
	} catch (error) {
		next({
			log: 'Error in textControllersetUpText',
			status: 400,
			message: { err: 'Error in sending message!', error },
		});
	}
};

// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID at twilio.com/console
// Provision API Keys at twilio.com/console/runtime/api-keys
// and set the environment variables. See http://twil.io/secure
// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const apiKey = process.env.TWILIO_API_KEY;
// const apiSecret = process.env.TWILIO_API_SECRET;
// const client = require('twilio')(apiKey, apiSecret, { accountSid: accountSid });ç

module.exports = textController;

// client.messages
// .create({from: '+15017122661', body: 'Hi there', to: '+15558675310'})
// .then(message => console.log(message.sid));

// https://api.twilio.com/2010-04-01/Accounts/{AccountSid}/Messages.json

// SID: SKcc5096f507149b66c1ed0111545cae88
// Secret: cNKDpQo6bg25vujmTzsqT7r80ff69jFF
// Test credentials
// Account SID: AC63f9f3b4e15df2a836f2dbdb0e7269b4
// Test auth token: 836d6a8c921839623494fa41573d12e2

// Live credentials
// Account SID: ACb85b03fe9fcbe43adc47d0c4e875c3aa
// Auth token: 17e2c9a6ab06897a21c9b6ff8a84d3cb
