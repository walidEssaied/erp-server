const parse = require('pg-connection-string').parse;
const config = parse("postgres://vfrbollnogqogp:0b3bc6f0e6e5230b2cb6f2e3b681a3ab1b198ea3c4ab6d73562dbcee0848ab22@ec2-34-246-227-219.eu-west-1.compute.amazonaws.com:5432/dbm7uo13rbrk1u");
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: config.host,
      port: config.port,
      database: config.database,
      user: config.user,
      password: config.password,
      ssl: {
        rejectUnauthorized: false
      },
    },
    debug: false,
  },
});