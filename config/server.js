const express = require('express');
const helmet = require('helmet'),
    server = express();
const { setRoutes } = require('./routes');
// For security

server.use(helmet());

const cors = require('cors'),
    // Allow Origins according to your need.
    corsOptions = {
        'origin': '*'
    };

server.use(cors(corsOptions));

server.use(express.json());
server.use(express.urlencoded({
    extended: true
}));

// Setting up Routes
setRoutes(server);

module.exports = { server };
