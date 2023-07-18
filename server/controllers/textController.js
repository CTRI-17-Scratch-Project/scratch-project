const dotEnv = require("dotenv").config();
const cron = require("node-cron");

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
//hard coded them in as env variables were giving us a headache
const client = require("twilio")(
  "ACb85b03fe9fcbe43adc47d0c4e875c3aa",
  "4a225d87f3ce3f404383e06e041035bb"
);

// const apiKey = process.env.TWILIO_API_KEY;
// const apiSecret = process.env.TWILIO_API_SECRET;
// const client = require('twilio')(
// 	'SKcc5096f507149b66c1ed0111545cae88',
// 	'cNKDpQo6bg25vujmTzsqT7r80ff69jFF',
// 	{ accountSid: 'AC63f9f3b4e15df2a836f2dbdb0e7269b4' }
// );

const textController = {};

//below message is for scheduling at intervals using node-cron, code beneath that is for automatic messages

// textController.sendText = async (req, res, next) => {
// 	console.log('we are in the textController setupTexts');
// 	const { username, plant, daysInterval, hour } = req.body;
// 	if ((!username || !plant || !daysInterval, !hour))
// 		return next({
// 			log: 'Error in textControllersetUpText',
// 			status: 400,
// 			message: { err: 'Error in request body!' },
// 		});
// 	const scheduledMessage = cron.schedule(
// 		`0 ${hour} */${daysInterval} * *`,
// 		async () => {
// 			try {
// 				const message = await client.messages.create({
// 					from: '+18449693100',
// 					messagingServiceSid: 'MG2583b9f6099fae31d8441512947c4e1d',
// 					body: `Hi, ${username}, Plant Daddy here! It is time to show your ${plant} some love!  Give your ${plant} about 1/4-1/3 of the pot's volume of water and rotate the pot for even sun exposure.  Finish off the job by whispering some sweet nothings into its leaves, and your ${plant} will keep thriving!`,
// 					to: '+12035544464',
// 					scheduleType: 'fixed',
// 					sendAt: new Date(Date.UTC(2023, 0o7, 16, 12, 0o2, 0o0)),
// 					'content-type': 'application/json',
// 				});
// 				console.log(message);
// 				res.locals.newMessage = message;
// 				next();
// 			} catch (error) {
// 				next({
// 					log: 'Error in textControllersetUpText',
// 					status: 400,
// 					message: { err: 'Error in sending message!', error },
// 				});
// 			}
// 		}
// 	);

// 	scheduledMessage.start();
// };


//automatic texting code, not scheduled
//need to 'validate' messages on twilio, but free tier limits that so commented out
textController.sendText = async (req, res, next) => {
  console.log("we are in the textController setupTexts");
  const { username, plant, phoneNumber } = req.body;
  console.log(req.body);
  if (!username || !plant || !phoneNumber)
    return next({
      log: "Error in textControllersetUpText",
      status: 400,
      message: { err: "Error in request body!" },
    });
  try {
    // const verifying = await client.validationRequests.create({friendlyName: username, phoneNumber: `+1${phoneNumber}`});
    // let verifiedNum = verifying.phoneNumber;
    const message = await client.messages.create({
      from: "+18449693100",
      messagingServiceSid: "MG2583b9f6099fae31d8441512947c4e1d",
      body: `Hi, ${username}, Plant Daddy here! It is time to show your ${plant} some love!  Give your ${plant} about 1/2 of the pot's volume of water and rotate the pot for even sun exposure.  Finish off the job by whispering some sweet nothings into its leaves, and your ${plant} will keep thriving!`,
      //
      to: "",
      //commented out for scheduling
      // scheduleType: 'fixed',
      // sendAt: new Date(Date.UTC(2023, 0o7, 16, 12, 0o2, 0o0)),
      "content-type": "application/json",
      plant: plant,
    });
    console.log(message);
    res.locals.newMessage = message;
    return next();
  } catch (error) {
    return next({
      log: "Error in textControllersetUpText",
      status: 400,
      message: { err: "Error in sending message!", error },
    });
  }
};

module.exports = textController;

//message api is twilio. alexandra has a free account right now and the auth token and account SID were giving us issues when stored as environmental variables, so we hard coded them in for the purposes of our demo.  when making the repository public, twilio will see that the auth token has been leaked and will automatically change it. if you want to iterate using twilio, it might be best to make your own account with your own credentials and then configure them as environmental variables from there, as my credentials will likely be invalid.