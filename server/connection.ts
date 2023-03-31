const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  user: "postgres",
  database: "postgres",
  port: 5432,
  password: "admin",
});

export default client;
