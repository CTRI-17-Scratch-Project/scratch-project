const Plant = require('../models/plantmodel');

const plantController = {};

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

plantController.createUser = async (req, res, next) => {
	try {
		console.log('I am in the createPlant middleware');
		//the keys we expect on request body
		const {
			Img,
			Id,
			Family,
			Common_name,
			Categories,
			Origin,
			Climate,
			Zone,
			Light_ideal,
			Light_tolerated,
			Watering,
			Color_of_blooms,
			Blooming_season,
			Pruning,
		} = req.body;
		//checking to make sure every property on req body has a value
		if (
			!Img ||
			!Id ||
			!Family ||
			!Common_name ||
			!Categories ||
			!Origin ||
			!Climate ||
			!Zone ||
			!Light_ideal ||
			!Light_tolerated ||
			!Watering ||
			!Color_of_blooms ||
			!Blooming_season ||
			!Pruning
		)
			return next({
				log: 'Error in plantController middleware function before posting to DB',
				status: 400,
				message: { err: 'Incorrect inputs' },
			});
		//creating a plant post to the database
		const plantEntry = await Plant.create({
			Img,
			Id,
			Family,
			Common_name,
			Categories,
			Origin,
			Climate,
			Zone,
			Light_ideal,
			Light_tolerated,
			Watering,
			Color_of_blooms,
			Blooming_season,
			Pruning,
		});
		console.log('data returned from create: ', plantEntry);
		res.locals.newPlant = plantEntry;
		return next();
	} catch (err) {
		return next({
			log: 'Error in plantController middleware function in posting to DB',
			status: 400,
			message: { err: 'error in creatingPlant' },
		});
	}
};

module.exports = plantController;
