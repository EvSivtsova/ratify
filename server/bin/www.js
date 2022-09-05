#!/usr/bin/env node

/**
 * Module dependencies.
 */

const app = require('../server');
const debug = require('debug')('ratify:server');
const http = require('http');
require('dotenv').config({ path: './config.env' });
const mongoose = require('mongoose');
const Db = process.env.ATLAS_URI;

/**
* Get port from environment and store in Express.
*/

const port = normalizePort(process.env.PORT || 8000);
app.set('port', port);

/**
* Connect to MongoDB
**/

// const mongoDbUrl = Db || 'mongodb://0.0.0.0/ratify';
const mongoDbUrl = 'mongodb://0.0.0.0/ratify';
mongoose.connect(mongoDbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("Successfully connected to MongoDB Atlas!");
})
.catch((error) => {
  console.log("Unable to connect to MongoDB Atlas!");
  console.error(error);
})

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

/**
* Create HTTP server.
*/

const server = http.createServer(app);

/**
* Listen on provided port, on all network interfaces.
*/

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
* Normalize a port into a number, string, or false.
*/

function normalizePort (val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
* Event listener for HTTP server 'error' event.
*/

function onError (error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
* Event listener for HTTP server 'listening' event.
*/

function onListening () {
  const addr = server.address();
  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  console.log('Now listening on ' + bind);
  debug('Listening on ' + bind);
}
