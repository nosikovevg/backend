const express = require ('express');
const mysql2 = require ('mysql2/promise');
const pool = mysql2.createPool ({
    host: 'localhost',
    user: 'root',
    database: 'expo',
    password: 'password',
});


const app = express();



//async function getNotes() {
//    const [rows] = await pool.query('SELECT * FROM tab1')
//    return rows  }  
//
//const notes = await getNotes()
//console.log(notes)

app.get('/', function (req, res) {
    pool.query('SELECT * FROM tab1').then(function(data) {
        res.json(data);
    });
   
//    res.send("It's working!!!!!!!!!!");


})

app.post('/addperson', async function (req, res) {
   console.log(reg.body);
   res.send(true);
})

app.listen(30333, ()=> {
    console.log("It's started", new Date());
});
