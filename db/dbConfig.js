require('dotenv').config();

module.exports = {

    development: {
      user: process.env.LOCAL_PG_UN,
      host: 'localhost',
      database: process.env.LOCAL_PG_DB,
      port: 5432
    },
  
    production: {
      // insert heroku configs here
      host: process.env.HEROKU_PG_HOST
    }
  
  };