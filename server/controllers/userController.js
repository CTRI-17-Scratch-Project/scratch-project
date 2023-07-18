const User = require('../models/userModel');

const userController = {};

userController.createUser = async (req, res, next) => {
	console.log('we are in the createUser middleware function');
	try {
		const { username } = req.body;
		if (!username)
			return next({
				log: 'Error in userController.createUser function before posting to DB',
				status: 400,
				message: { err: 'error in createUser' },
			});
		const newUser = await User.create({
			username: username,
			plants: [],
			notifications: [],
		});

		console.log(newUser);
		res.locals.newUser = newUser;
		next();
	} catch (err) {
		return next({
			log: 'Error in userController.createUser function in posting to DB',
			status: 400,
			message: { err: 'error in createUser' },
		});
	}
};

userController.getUserPlants = async (req, res, next) => {
	console.log('we are in the getUserPlants middleware function');
	try {
		const userInfo = await User.findOne({ username: req.params.name });

		if (!userInfo) {
			return next({
				log: 'Error in userController.getUserPlants function before posting to DB',
				status: 400,
				message: { err: 'user not found' },
			});
		}
		res.locals.userInfo = userInfo;
		return next();
	} catch (err) {
		return next({
			log: 'Error in userController.getUserPlants function before posting to DB',
			status: 400,
			message: { err: 'error in getUserPlants' },
		});
	}
};

userController.addUserPlants = async (req, res, next) => {
	console.log('I am in the addUserPlants middleware');
	console.log(req.body);
	try {
		//the keys we expect on request body
		const { username, plants, type } = req.body;
		//checking to make sure every property on req body has a value

		if (!username || !plants || !type)
			return next({
				log: 'Error in userController.addUserPlants middleware function before posting to DB',
				status: 400,
				message: { err: 'Incorrect inputs' },
			});
		//adding a plant to the user's document
		if (type === 'add') {
			//take care of plants array here
			const userInfo = await User.findOneAndUpdate(
				{ username: req.body.username },
				{ $push: { plants: req.body.plants } },
				{ new: true }
			);
			const currentPlants = userInfo.plants.flat();
			console.log('data returned from create: ', currentPlants);
			res.locals.updatedPlants = currentPlants;
			return next();
		}

		/*
    
    {
   "username": "kevin",
   "plants": {
     "Img": "http://www.tropicopia.com/house-plant/thumbnails/5585.jpg",
     "Id": "e5be9fde-3069-552c-969c-bb59f0fab9f2",
     "Family": "Liliaceae",
     "Common_name": [ "Malaysian Dracaena" ],
     "Categories": "Dracaena",
     "Origin": [ "Cultivar" ],
     "Zone": [ "11-10" ],
     "Light_ideal": "Strong light ( 21,500 to 3,200 lux/2000 to 300 fc)",
     "Light_tolerated": "Diffuse light ( Less than 5,300 lux / 500 fc)",
     "Watering": "Keep moist between watering & Water when soil is half dry",
     "Color_of_blooms": "Medium green",
     "Blooming_season": "Winter",
     "Pruning": "If needed"
    },
    "type": "delete"
    }
  
    */
		if (type === 'delete') {
			const userInfo = await User.findOneAndUpdate(
				{ username: req.body.username },
				{
					$pull: {
						plants: {
							Img: req.body.plants.Img,
							Id: req.body.plants.Id,
							Family: req.body.plants.Family,
							Common_name: req.body.plants.Common_name,
							Categories: req.body.plants.Categories,
							Origin: req.body.plants.Origin,
							Zone: req.body.plants.Zone,
							Light_ideal: req.body.plants.Light_ideal,
							Light_tolerated: req.body.plants.Light_tolerated,
							Watering: req.body.plants.Watering,
							Color_of_blooms: req.body.plants.Color_of_blooms,
							Blooming_season: req.body.plants.Blooming_season,
							Pruning: req.body.plants.Pruning,
						},
					},
					//{ $pull: { results: { $elemMatch: { score: 8 , item: "B" } } } }
				},
				{ new: true }
			);
			const currentPlants = userInfo.plants.flat();
			console.log('data returned from delete: ', currentPlants);
			res.locals.updatedPlants = currentPlants;
			return next();
		}
	} catch (err) {
		return next({
			log: 'Error in userController.addUserPlants function in posting to DB',
			status: 400,
			message: { err: 'error in addUserPlants' },
		});
	}
};

userController.updateNotifications = async (req, res, next) => {
	console.log('I am in the userController update notifications middleware');
	try {
		const { username, plant, type } = req.body;
		if (!type || !username || !plant)
			return next({
				log: 'Error in userController.updateNotifications function before posting to DB',
				status: 400,
				message: {
					err: 'error in updateNotifications! Did not include correct type of request',
				},
			});
		const newMessage = res.locals.newMessage;
		if (type === 'add') {
			const userInfo = await User.findOneAndUpdate(
				{ username: req.body.username },
				{ $push: { notifications: newMessage } },
				{ new: true }
			);
			// const currentNotifications = userInfo.notifications.flat();
			// console.log(
			//   'data returned from adding notification to user in DB: ',
			//   currentNotifications
			// );
			return next();
		}
		if (type === 'delete') {
			const userInfo = await User.findOneAndUpdate(
				{ username: req.body.username },
				{ $pull: { notifications: req.body.plant } },
				//{ $pull: { results: { $elemMatch: { score: 8 , item: "B" } } } }
				{ new: true }
			);
			const currentNotifications = userInfo.notifications.flat();
			console.log(
				'data returned from deleting notification from user in DB: ',
				currentNotifications
			);
			res.locals.updatedNotifications = currentNotifications;
			return next();
		}
		if (type === 'update') {
			const { daysInterval, hour } = req.body;
			const newSchedule = `0 ${hour} */${daysInterval} * *`;
			const userInfo = await User.findOneAndUpdate(
				{ username: req.body.username },
				{
					$set: {
						'notifications[plant][sendAt]': `new Date(Date.UTC(${newSchedule}))`,
					},
				},
				{ new: true }
			);
			const currentNotifications = userInfo.notifications.flat();
			console.log(
				'data returned from adding notification to DB: ',
				currentNotifications
			);
			res.locals.updatedNotifications = currentNotifications;
			return next();
		}
	} catch (error) {
		return next({
			log: 'Error in userController.updateNotifications function in posting to DB',
			status: 400,
			message: { err: 'error in updateNotifications' },
		});
	}
};

module.exports = userController;

// !Img ||
// !Id ||
// !Family ||
// !Common_name ||
// !Categories ||
// !Origin ||
// !Climate ||
// !Zone ||
// !Light_ideal ||
// !Light_tolerated ||
// !Watering ||
// !Color_of_blooms ||
// !Blooming_season ||
// !Pruning
// Img: plant['Img'],
// 					Id: plant['id'],
// 					Family: plant['Family'],
// 					Common_name: plant['Common name'],
// 					Categories: plant['Categories'],
// 					Origin: plant['Origin'],
// 					Climate: plant['Climate'],
// 					Zone: plant['Zone'],
// 					Light_ideal: plant['Light ideal'],
// 					Light_tolerated: plant['Light tolered'],
// 					Watering: plant['Watering'],
// 					Color_of_blooms: plant['Color of blooms'],
// 					Blooming_season: plant['Blooming season'],
// 					Pruning: plant['Pruning'],
