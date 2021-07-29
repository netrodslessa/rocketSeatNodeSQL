const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

// importa os models
const User = require('../models/User')

const connection = new Sequelize(dbConfig);

User.init(connection);

module.express = connection;