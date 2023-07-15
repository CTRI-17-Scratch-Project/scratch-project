const axios = require('axios');

const apiController = {};

apiController.getPlantData = async (req, res, next) => {
	console.log('We are in the getPlantData controller');
	try {
		const response = await axios.request(
			'https://house-plants2.p.rapidapi.com/all',
			{
				method: 'GET',
				headers: {
					'X-RapidAPI-Key':
						'b8a7f4d740msh6f868ffc4f45dfdp1e6998jsn60afddc504b4',
					'X-RapidAPI-Host': 'house-plants2.p.rapidapi.com',
				},
			}
		);
		const data = response.data;
		console.log(data);
		res.locals.plantData = data;
		next();
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'An error occurred in apiRouter' });
	}
};

apiController.handlePlantData = (req, res, next) => {
	console.log('we are in the handlePlantData middleware');
	const makeDataPretty = async () => {
		try {
			const prettierData = [];
			for (const plant of res.locals.plantData) {
				const obj = {
					Img: plant['Img'],
					Id: plant['id'],
					Family: plant['Family'],
					Common_name: plant['Common name'],
					Categories: plant['Categories'],
					Origin: plant['Origin'],
					Climate: plant['Climate'],
					Zone: plant['Zone'],
					Light_ideal: plant['Light ideal'],
					Light_tolerated: plant['Light tolered'],
					Watering: plant['Watering'],
					Color_of_blooms: plant['Color of blooms'],
					Blooming_season: plant['Blooming season'],
					Pruning: plant['Pruning'],
				};
				prettierData.push(obj);
			}
			res.locals.plantData = prettierData;
			return next();
		} catch (error) {
			next({
				log: 'Error in apiController middleware function data handling',
				status: 400,
				message: { err: 'trouble handling data' },
			});
		}
	};
	makeDataPretty();
};

// NYTController.handleBookList = (req, res, next) => {
// 	console.log('we are in handlebooklist');
// 	const makePretty = async () => {
// 		try {
// 			const prettierList = [];
// 			//const data = res.locals.bookData;

// 			for (let list of res.locals.bookData) {
// 				const obj = { list_name: list['list_name'], books: list['books'] };
// 				prettierList.push(obj);
// 			}
// 			//console.log(prettierList);
// 			res.locals.bookLists = prettierList;
// 			//console.log(res.locals.bookLists);
// 			next();
// 		} catch (error) {
// 			console.log('error!!!');
// 			next({
// 				log: 'Error in NYTController.handleBookList',
// 				message: { err: 'Error occurred manipulating data' },
// 			});
// 		}
// 	};
// 	makePretty();
// };

// const axios = require('axios');

// const options = {
// 	method: 'GET',
// 	url: 'https://house-plants2.p.rapidapi.com/all',
// 	headers: {
// 		'X-RapidAPI-Key': 'b8a7f4d740msh6f868ffc4f45dfdp1e6998jsn60afddc504b4',
// 		'X-RapidAPI-Host': 'house-plants2.p.rapidapi.com',
// 	},
// };

// apiController.getPlantData = async (req, res, next) => {
// 	try {
// 		const response = await axios.request(options);
// 		const data = response.data;
// 		res.locals.plantData = data;
// 		next();
// 		console.log(response.data);
// 	} catch (error) {
// 		console.error(error);
// 	}
// };

module.exports = apiController;

// apiController.handlePlantData = async (req, res, next) => {
//   console.log('We are in the handlePlantData controller');
//  const fetchPlants = async () => {
//await fetch(options)
//
//}

// };
