const {Client} = require('pg')
 
const client = new Client({
    host: 'localhost',
    user: 'postgres',
    database: 'mydb',
    port: 5432,
    password: '1268547'
});

export default client;
