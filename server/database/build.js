const { readFileSync } = require('fs');
const { join } = require('path');
const connection = require('./config/connection');

const sql = readFileSync(join(__dirname, 'build.sql'), 'utf-8');
connection
  .query(sql)
  .then(() => {
    console.log('Users table created successfully');
  })
  .catch((err) => {
    console.log('Error creating users table', err.stack);
  });
