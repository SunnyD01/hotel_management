const {Client} = require('pg')
require('dotenv').config();

const client = new Client({
    host: 'localhost',
    user: process.env.USER,
    database: 'mydb',
    port: 5432,
    password: process.env.PASSWORD
});

export default client;
