const { Client } = require('pg')
const connectionData = {
    user: 'postgres',
    host: 'localhost',
    database: 'test',
    password: 'josue1996',
    port: 5432,
  }
const client = new Client(connectionData)
client.connect()
client.query('SELECT nombre FROM public.registro')
    .then(response => {
        console.log(response.rows)
        client.end()
    })
    .catch(err => {
        client.end()
    })
