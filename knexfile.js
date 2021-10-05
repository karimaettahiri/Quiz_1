
// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'cluckr',
      username: 'karima',
      password:'karima123@'
    },
    migrations: {
      tableName: "migrations",
      directory: "db/migrations"
    },
    seeds: {
      directory: "db/seeds"
    }
  }

};
