const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

//TODO: Require all routers
const exampleRouter = require('./routers/exampleRouter');

//handle requests for static files
// app.use(express.static(path.resolve(__dirname, '../client/index.js')));
if ((process.env.NODE_ENV = 'production')) {
  app.use('/build', express.static(path.resolve(__dirname, '../build')));
}

//convert incoming requests to JSON
app.use(express.json());
app.use('*', express.urlencoded({ extended: true }));

//TODO: Write route handler functions
app.use('/', exampleMiddleware, (req, res) => {});

//handle generic request to serve HTML file
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, '../index.html'));
});

//catch-all route for unknown routes
app.use((req, res) => {
  res.status(404).send('Oops! Cannot find page!');
});

//global error handler function
app.use((err, req, res, next) => {
  const defaultError = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultError, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

//listen on port 3000
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
