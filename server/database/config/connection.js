// Add code below to connect to your database

const { Pool } = require('pg');
// require('env2')('../../../config.env');
require('env2')(require('path').join(__dirname, '../../../config.env'));

if (!process.env.DB_URL) throw new Error('No Database URL!!!');

const params = new URL(process.env.DB_URL);
console.log('Connecting to database:', params);

const options = {
  user: params.username,
  password: params.password,
  host: params.hostname,
  port: params.port,
  database: params.pathname.split('/')[1],
  ssl: params.hostname !== 'localhost',
  max: process.env.DB_MAX_CONNECTIONS || 2,
};

module.exports = new Pool(options);