require('dotenv').config();

const config = {
  username: process.env.MYSQLUSER || 'root',
  password: process.env.MYSQLPASSWORD || '123456',
  database: process.env.MYSQLDATABASE || 'delivery-app',
  host: process.env.MYSQLHOST || 'localhost',
  port: process.env.MYSQLPORT || '3306',
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: true,
};

console.log("🚀 ~ options:", config);

module.exports = {
  development: config,
  test: config,
  production: config,
};