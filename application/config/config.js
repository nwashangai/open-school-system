module.exports = {
  development: {
    username: 'postgres',
    password: 'andela',
    database: 'oss',
    host: '127.0.0.1',
    logging: false,
    port: 5432,
    dialect: 'postgres'
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    logging: false,
    port: 5432,
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL'
  }
}
