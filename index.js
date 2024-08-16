const express = require('express'),
    app = express();
require('express-async-errors')

const bodyParser = require('body-parser');
const db = require('./db')
    //Employees
    employeeRoutes = require('./controllers/employee.controller')
    //User
    userRoutes = require('./controllers/user.controller')

//middleware
app.use(bodyParser.json())
app.use('/api/employees',employeeRoutes)
app.use('/api/users', userRoutes)
app.use((err,req,res,next) => {
    console.log(err)
    res.status(err.status || 500).send('Something went wrong, Please check for null/incorrect/duplicate values')
})

db.query("SELECT 1")
    .then(() => {
        console.log("db Connected!")
        app.listen(2000,
            () => console.log('server started at 2000')
        )
    })
    .catch(err => console.log('db connection faild. \n' + err))
    

