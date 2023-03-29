const {Client} = require('pg')
 
const client = new Client({
    host: 'localhost',
    user: 'postgres',
    database: 'CSI2132 Project',
    port: 5432,
    password: 'renny0617'
});

export default client;
