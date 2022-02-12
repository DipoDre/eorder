require("dotenv").config();
const { MYSQL_DATABASE, MYSQL_USERNAME, MYSQL_PASSWORD } = process.env;

console.log(MYSQL_USERNAME);
console.log(MYSQL_DATABASE);
console.log(MYSQL_PASSWORD);

module.exports = {
  development: {
    username: MYSQL_USERNAME,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE,
    host: "127.0.0.1",
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
