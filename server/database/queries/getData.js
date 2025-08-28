// Add code below to get users info from your database

const db = require('../config/connection');

const getUsers = () => {
  return db.query('SELECT * FROM users;');
};

module.exports = { getUsers };
