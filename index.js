const express = require ('express');
const mysql2 = require ('mysql2/promise');
const pool = mysql2.createPool ({
    host: 'localhost',
    user: 'root',
    database: 'expo',
    password: 'password',
});


const app = express();


app.get('/', function (req, res) {
    pool.query('SELECT * FROM tab1').then(function(data) {
        res.json(data);
    });
   
//    res.send("It's working!!!!!!!!!!");


})


app.listen(3000, ()=> {
    console.log("It's started", new Date());
});
