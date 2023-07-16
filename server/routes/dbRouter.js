const express = require("express");

//TODO: require relevant controller(s)
const userController = require("../controllers/userController");

const dbRouter = express.Router();

dbRouter.get("/:name", userController.getUserPlants, (req, res) => {
  console.log("I am in the router to the database (GET)");
  return res.status(200).json(res.locals.userInfo);
});

dbRouter.post("/", userController.createUser, (req, res) => {
  console.log("I am in the router to the database (POST)");
  console.log(res.locals.newUser);
  return res.status(200).json(res.locals.newUser);
});

dbRouter.delete("/", (req, res) => {
  console.log("I am in the router to the database (DELETE)");
  return res.status(200).json({});
});

dbRouter.patch("/", userController.addUserPlants, (req, res) => {
  console.log("I am in the router to the database (PATCH)");
  console.log(res.locals.addedPlant);
  return res.status(200).json(res.locals.updatedPlants);
});

module.exports = dbRouter;
