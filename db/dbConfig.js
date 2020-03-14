require('dotenv').config();

module.exports = {

    development: {
      host: 'localhost',
      port: 5432,
      user: process.env.LOCAL_PG_UN,
      database: process.env.LOCAL_PG_DB
    },
  
    production: {
      connectionString: process.env.DATABASE_URL,
      ssl: true
    }
  
  };