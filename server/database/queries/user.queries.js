const db = require('../config/connection');

const getUsers = () => {
  return db.query('SELECT * FROM users;');
};

const createUser = (name, location) => {
  return db.query(
    'INSERT INTO users (name, location) VALUES  ($1, $2) RETURNING *;',
    [name, location]
  );
};

const deleteUser = (userId) => {
  return db.query('DELETE FROM users WHERE id = $1 RETURNING *', [userId]);
};

module.exports = { getUsers, createUser, deleteUser };
