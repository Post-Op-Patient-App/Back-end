const knex = require('knex');

const knexConfig = require('../knexfile');

const DB = process.env.DB_ENV || 'development'

module.exports = knex(knexConfig[DB]);
