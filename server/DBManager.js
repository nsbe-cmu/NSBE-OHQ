var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'CMUNSBE',
  password: 'cmuOHQ123',
  database: 'NSBE-OHQ'
})

connection.connect()
connection.
connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
})

connection.end()