const mysql = require('mysql2/promise')

const mysqlPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Dora@1970.',
    database: 'employee_db'
})

module.exports = mysqlPool