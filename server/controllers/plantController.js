const Plant = require('../models/plantmodel');

const plantController = {};

plantController.createPlant = async (req, res, next) => {
	try {
		console.log('I am in the createPlant middleware');
		const {
			Img,
			Id,
			Family,
			Other_names,
			Common_name,
			Description,
			Categories,
			Origin,
			Climat,
			Zone,
			Light_ideal,
			Light_tolered,
			Watering,
			Color_of_blooms,
			Blooming_season,
			Pruning,
			Style,
		} = req.body;
		if (
			!Img ||
			!Id ||
			!Family ||
			!Other_names ||
			!Common_name ||
			!Description ||
			!Categories ||
			!Origin ||
			!Climat ||
			!Zone ||
			!Light_ideal ||
			!Light_tolered ||
			!Watering ||
			!Color_of_blooms ||
			!Blooming_season ||
			!Pruning ||
			!Style
		)
			return next({
				log: 'Error in plantController middleware function before posting to DB',
				status: 400,
				message: { err: 'Incorrect inputs' },
			});
		const plantEntry = await Plant.create({
			Img,
			Id,
			Family,
			Other_names,
			Common_name,
			Description,
			Categories,
			Origin,
			Climat,
			Zone,
			Light_ideal,
			Light_tolered,
			Watering,
			Color_of_blooms,
			Blooming_season,
			Pruning,
			Style,
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
