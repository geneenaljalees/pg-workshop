const express = require("express");
// const users = require("./static");
const { fetchUsers , addUser, removeUser} = require('./user.controller');

const router = express.Router();

router.get("/users", fetchUsers);
router.post('/create-user', addUser);
router.delete('/delete-user/:id', removeUser);

module.exports = router;
