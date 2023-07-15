const mongoose = require('mongoose');

const MONGO_URI = '';

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'scratch-project',
});

const Schema = mongoose.Schema;

// const plantSchema = new Schema({

// })

const personSchema = new Schema({
  firstName: String,
  lastName: String,

  publisher: String,
  plants: [plantSchema],
});

const Person = mongoose.model('person', personSchema);

module.exports = Person;


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
