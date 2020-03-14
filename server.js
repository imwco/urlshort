const express = require('express');
const cors = require('cors');

const { query, endConnect } = require('./db');

const server = express();

server.use(cors());
server.use(express.json());

server.get('/', (req, res) =>
  res.status(200).json("Welcome to the Url Shortener app server!")
);

query('CREATE TABLE IF NOT EXISTS urlhash(id SERIAL PRIMARY KEY, url TEXT UNIQUE, hash TEXT UNIQUE)', [], (err, res) => {
  if (err) console.log(err.stack);
  endConnect();
})

module.exports = server;