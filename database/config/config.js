module.exports = {
  development: {
    username: "root",
    password: null,
    database: "db_bora",
    host: "127.0.0.1",
    dialect: "mysql",
    timezone: "-03:00"
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
