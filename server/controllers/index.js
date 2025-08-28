const express = require("express");
const { fetchUsers , addUser, removeUser} = require('./user.controller');

const router = express.Router();

router.get("/users", fetchUsers);
router.post('/create-user', addUser);
router.delete('/delete-user/:id', removeUser);

module.exports = router;
