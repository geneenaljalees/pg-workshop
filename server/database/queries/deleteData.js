const db = require('../config/connection');

const deleteUser = (userId) => {
  return db.query('DELETE FROM users WHERE id = $1 RETURNING *', [userId]);
};

module.exports = { deleteUser };
