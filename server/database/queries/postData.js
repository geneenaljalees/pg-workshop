// Add code below to insert user info to your database
const db = require('../config/connection');

const createUser = (name, location) => {
  return db.query(
    'INSERT INTO users (name, location) VALUES  ($1, $2) RETURNING *;',
    [name, location]
  );
};

module.exports = { createUser };
