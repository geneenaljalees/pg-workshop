const {
  getUsers,
  createUser,
  deleteUser,
} = require('../database/queries/user.queries.js');



const fetchUsers = async (req, res, next) => {
  try {
    const result = await getUsers();
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
};

const addUser = async (req, res, next) => {
  try {
    const { name, location } = req.body;
    if (!name || !location) {
      return res.status(400).json({ error: 'Name and location are required.' });
    }
    const result = await createUser(name, location);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    next(err);
  }
};

const removeUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await deleteUser(id);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'User not found.' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    next(err);
  }
};

module.exports = { fetchUsers, addUser, removeUser };
