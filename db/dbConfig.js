require('dotenv').config();

module.exports = {

    development: {
      host: 'localhost',
      port: 5432,
      user: process.env.LOCAL_PG_UN,
      database: process.env.LOCAL_PG_DB
    },
  
    production: {
      host: process.env.HEROKU_PG_HOST,
      port: process.env.HEROKU_PG_PORT,
      user: process.env.HEROKU_PG_UN,
      password: process.env.HEROKU_PG_PW,
      database: process.env.HEROKU_PG_DB
    }
  
  };