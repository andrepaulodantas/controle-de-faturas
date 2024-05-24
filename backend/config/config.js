require('dotenv').config(); // Ensure to install dotenv package

module.exports = {
  development: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres'
  },
  test: {
    url: process.env.TEST_DATABASE_URL,
    dialect: 'postgres'
  },
  production: {
    url: process.env.PRODUCTION_DATABASE_URL,
    dialect: 'postgres'
  }
};
