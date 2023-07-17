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

    if (!username || !plants)
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
    if (type === 'delete') {
      const userInfo = await User.findOneAndUpdate(
        { username: req.body.username },
        {
          $pull: { plants: { $elemMatch: { name: req.body.plants.name } } },
        },
        //req.body.plants[0].name
        { new: true }
      );
      const currentPlants = userInfo.plants.flat();
      console.log('data returned from delete: ', currentPlants);
      res.locals.updatedPlants = currentPlants;
      return next();
    }
    //console.log('data returned from create: ', userInfo);

    // const currentPlants = userInfo.plants.flat();
    // console.log('data returned from create: ', currentPlants);
    // res.locals.updatedPlants = currentPlants;
    // return next();
  } catch (err) {
    return next({
      log: 'Error in userController.addUserPlants function in posting to DB',
      status: 400,
      message: { err: 'error in addUserPlants' },
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
