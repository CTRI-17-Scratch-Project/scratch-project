const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://lash211:lash211@cluster0.hsawmf4.mongodb.net/';

mongoose.connect(MONGO_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	dbName: 'scratch-project',
});

const Schema = mongoose.Schema;

const plantSchema = new Schema({
	Img: String,
	Id: String,
	Family: String,
	Other_names: String,
	Common_name: String,
	Categories: String,
	Origin: String,
	Climat: String,
	Zone: String,
	Light_ideal: String,
	Light_tolered: String,
	Watering: String,
	Color_of_blooms: String,
	Blooming_season: String,
	Pruning: String,
});

const Plant = mongoose.model('plant', plantSchema);

// module.exports = Plant;

const userSchema = new Schema({
	username: String,
	plants: [plantSchema],
});

const User = mongoose.model('person', userSchema);

// module.exports = Person;
//idea of subdocs embedded in a parent doc
//plant schema embedded as a subdoc within personschema

//https://mongoosejs.com/docs/subdocs.html

//installing bcrypt for password hashing and security(login page can redirect) on server page (npm install bcrypt --save)
//const bcrypt = require('bcrypt')
//const saltRounds = 10
//const password = ''

// bcrypt
//   .genSalt(saltRounds)
//   .then(salt => {
//     console.log('Salt generated:', salt);
//     return bcrypt.hash(password, salt);
//   })
//   .then(hash => {
//     console.log('Hash generated: ', hash);
//   })
//   .catch(err => console.log(err));

// "Img:"'String"g,
// "Id" : "String",
// "Family": "String",
// "Other_names": "String",
// "Common_name": "String",
// "Description": "String",
// "Categories": "String",
// "Origin": "String",
// "Climat": "String",
// "Zone": "String",
// "Light_ideal": "String",
// "Light_tolered": "String",
// "Watering": "String",
// "Color_of_blooms": "String","
// """,""Bloomi"ng"season": "String"
// ""Prun"in"": "St"ing"
// "Style": "String"
